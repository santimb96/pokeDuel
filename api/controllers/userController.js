const User = require("../models/user.js");
const handleError = require("./errorController.js");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const masterToken = require("../config/masterToken.js");
const EXPIRE_DATE = require("../constants.js");
const getDataFromAws = require("../utils/awsStorage.js");
const { format } = require("date-fns");

const app = express();
app.set("masterKey", masterToken);

const getAll = async (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ users }))
    .catch(() =>
      handleError(404, "No se ha podido obtener ningún usuario", res)
    );
};

const findId = async (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) =>
      user
        ? res.status(200).send({ user })
        : handleError(404, "Usuario no encontrado", res)
    )
    .catch(() => handleError(404, "Usuario no encontrado", res));
};

const updateById = async (req, res) => {
  const userToUpdate = req.body;
  if (req.body.password) {
    bcrypt.genSalt(10).then((salt) => {
      bcrypt.hash(userToUpdate.password, salt).then((newPassword) => {
        userToUpdate.password = newPassword;
        User.findOneAndUpdate({ _id: req.params.id }, userToUpdate)
          .then((user) =>
            res
              .status(201)
              .send({ status: 201, message: `${user.username} actualizado` })
          )
          .catch(() => handleError(404, "Usuario no encontrado", res));
      });
    });
  } else {
    User.findOneAndUpdate({ _id: req.params.id }, userToUpdate)
      .then((user) =>
        res
          .status(201)
          .send({ status: 201, message: `${user.name} actualizado` })
      )
      .catch(() => handleError(404, "Usuario no encontrado", res));
  }
};

const create = (req, res) => {
  const userToCreate = req.body;
  console.log(req.body)

  bcrypt.genSalt(10).then((salt) => {
    bcrypt.hash(userToCreate.password, salt).then((newPassword) => {
      userToCreate.password = newPassword;
      const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg";
      const { username, password, email } = userToCreate;
      const newUser = new User({
        username,
        password,
        email,
        avatar: URL,
        createdAt: new Date()
      });
      try {
        User.create(newUser).then((userCreated) => {
          return res.status(201).send({
            status: 201,
            message: `${userCreated.username} ha sido cread@`,
          });
        });
      } catch (error) {
        console.error(error)
      }
      // this approach will be available when the aws service will be payed
      // getDataFromAws(req, "avatar/")
      //   .then((data) => {
      //     const url = data?.Location;

      //     const newUser = new User({
      //       username: userToCreate.username,
      //       password: userToCreate.password,
      //       email: userToCreate.email,
      //       avatar: url,
      //       createdAt: new Date(),
      //     });
      //     console.warn(newUser);

      //     User.create(newUser).then((userCreated) => {
      //       return res.status(201).send({
      //         status: 201,
      //         message: `${userCreated.username} ha sido cread@`,
      //       });
      //     });
      //   })
      //   .catch((err) => new Error(err));
    });
  });
};

const deleteById = async (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(() =>
      res
        .status(200)
        .send({ status: 200, message: "Registro borrado con éxito!" })
    )
    .catch(() => handleError(404, "Usuario no encontrado", res));
};

const login = (req, res) => {
  if (!req.body.username || !req.body.password) {
    handleError(400.1, "Parámetros incorrectos", res);
  } else {
    // buscar el usuario
    // comparar contraseñas con bcrypt
    // si es ok, firmar jwt
    // devolver user, userRole, jwt y expiryDate
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (user) {
          bcrypt
            .compare(req.body.password, user.password)
            .then((pass) => {
              if (pass) {
                delete user._doc.password;
                const token = jwt.sign({ user }, app.get("masterKey"), {
                  expiresIn: EXPIRE_DATE,
                });
                const expDate = new Date(Date.now() + 3600 * 1000 * 24);

                res.status(200).send({
                  user,
                  token: token,
                  expiryDate: format(expDate, "dd/MM/yyyy HH:mm"),
                });
              } else {
                handleError(401.1, "Contraseña incorrecta", res);
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch(() => {
        handleError(404, "Usuario no encontrado", res);
      });
  }
};

const autoLogin = (req, res) => {
  // {id: id, token: token}
  User.findOne({ _id: req.body.id }).then((user) => {
    if (user) {
      delete user._doc.password;
      res.status(200).send({ user });
    } else {
      handleError(404, "Usuario no encontrado", res);
    }
  });
};

module.exports = {
  getAll,
  findId,
  updateById,
  create,
  deleteById,
  login,
  autoLogin,
};
