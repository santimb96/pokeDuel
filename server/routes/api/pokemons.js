const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//GET Users
router.get('/', async (req,res) => {
    const pokemons = await loadPokemonsCollection();
    res.send(await pokemons.find({}).toArray());
});

//CREATE User
router.post('/', async (req,res) => {
    const pokemons = await loadUsersCollection();
    await pokemons.insertOne({ //insertOne --> belongs to MongoDB
        name: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//DELETE User
router.delete('/:id',async (req,res) => {
    const pokemons = await loadPokemonsCollection();
    await pokemons.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function loadPokemonsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://pokeduel:pokeDuelDaw2022@pokedueldaw.jvx7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
    return client.db('pokeduelDAW').collection('pokemons');
}

module.exports = router;