const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//GET Users
router.get('/', async (req,res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray());
});

//CREATE User
router.post('/', async (req,res) => {
    const users = await loadUsersCollection();
    await users.insertOne({ //insertOne --> belongs to MongoDB
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//DELETE User
router.delete('/:id',async (req,res) => {
    const users = await loadUsersCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://pokeduel:pokeDuelDaw2022@pokedueldaw.jvx7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
    return client.db('pokeduelDAW').collection('users');
}

module.exports = router;