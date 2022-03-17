/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/users');

app.use('/api/users',users);

const pokemons = require('./routes/api/pokemons');

app.use('/api/pokemons', pokemons);


//Load HTTP module
const http = require('http');
const hostname = '13.38.185.71';
const port = process.env.PORT || 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
});


app.get('/', (req, res) => {
    res.send('Hello World!');
})

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


app.listen(port, () => console.log(`Server started on port ${port}`));
*/

const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const mongodb = require('mongodb');

const router = express.Router();

//GET Users
app.get('/api/pokemons', async (req,res) => {
    const pokemons = await loadPokemonsCollection();
    res.send(await pokemons.find({}).toArray());
    //res.send('Hello Pokemons');
});

async function loadPokemonsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://pokeduel:pokeDuelDaw2022@pokedueldaw.jvx7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
    return client.db('pokeduelDAW').collection('pokemons');
}

module.exports = router;