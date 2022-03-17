import fetch from "cross-fetch";
import fs from "fs";


const APP = {
    url: [],
    pokeList: [],

    getData: async function () {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=493');
        const data = await response.json();
        await this.pushingUrl(data);
    },
    pushingUrl: function (data) {
        data.results.forEach(pokemon => {
            this.url.push(pokemon.url);
            console.log(pokemon.url);
        });
        this.fetchingUrl(this.url);
    },
    fetchingUrl: async function (url) {
        url.forEach(data => {
            this.getPokemon(data).then(pokemon => {
                this.pokeList.push(pokemon);
            });
        })
        setTimeout(() => this.writeData(), 1000);
    },

    getPokemon: async function (url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log({
            id: data.id,
            name: data.name,
            level: 1,
            type: data.types[0].type.name,
            speed: data.stats[5].base_stat,
            img: `https://images.gameinfo.io/pokemon-trimmed/60/p${data.id}.webp`
        })
        return {
            id: data.id,
            name: data.name,
            level: 1,
            type: data.types[0].type.name,
            speed: data.stats[5].base_stat,
            img: `https://images.gameinfo.io/pokemon-trimmed/60/p${data.id}.webp`
        };

    },
    writeData: function(){
        const filtrados = this.pokeList.filter(pokemon => ['grass', 'fire', 'water'].includes(pokemon.type));
        const sortedObj = filtrados.sort((a, b)=> {
            return a.id - b.id;
        });

        fs.writeFile("db.json", JSON.stringify(sortedObj), (err) => {
            if (err) return console.error(err);
            console.info('Saved!');
        });
    }
}
APP.getData();