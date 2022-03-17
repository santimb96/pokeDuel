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
const mongoose = require('mongoose');
const routes = require('./routes');
const port = 3000;
const uri = 'mongodb+srv://pokeduel:pokeDuelDaw2022@pokedueldaw.jvx7c.mongodb.net/pokeduelDAW?retryWrites=true&w=majority';

mongoose
    .connect(uri, { useNewUrlParser: true})
    .then(() => {
        const app = express();
        app.use('/api', routes);
        app.listen(port, () => {
            console.log("Server has started!"+port);
        })
    });

