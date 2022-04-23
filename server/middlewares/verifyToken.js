const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { masterToken } = require('../config/masterToken.js');
const express = require('express');
const { public } = require("../uris/public.js");



const app = express();


app.set('masterKey', masterToken);


const verify = (req, res, next) => {
  const token =
    typeof req.headers.authorization !== "undefined"
      ? req.headers.authorization.replace(/^Bearer\s+/, "")
      : false;

     if(token){
        jwt.verify(token, app.get('masterKey'), (err, decoded) => {
          if (err) {
            handleError(401, 'Token inválido', res);
          } else {
            req.user = decoded.user;
            next();
          }
        });
     } else {
       next();
     } 
};

module.exports = verify;
