import fetch from "cross-fetch";
import fs from "fs";

/**
 * PARA EJECUTAR, HAY QUE INSTALAR DEPENDENCIAS CON NPM INSTALL Y LUEGO:
 * @code node toDB.js
 * @type {{pushingUrl: APP.pushingUrl, fetchingUrl: (function(*): void), pokeList: *[], getPokemon: (function(*=): {img: string, level: number, name: *, _id: *, type: *, speed: *}), writeData: APP.writeData, url: *[], getData: ((function(): Promise<void>)|*)}}
 */

const APP = {
    url: [],
    pokeList: [],

    getData: async function () {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
        const data = await response.json();
        await this.pushingUrl(data);
    },
    pushingUrl: function (data) {
        data.results.forEach(pokemon => {
            this.url.push(pokemon.url);
            console.log(pokemon.url);
        });
        this.fetchingUrl(this.url).then(() => this.writeData());
    },
    fetchingUrl: async function (url) {
        for (const data of url) {
            const async = await this.getPokemon(data);
            this.pokeList.push(async);
        }
    },

    getPokemon: async function (url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log({
            pokedexNumber: data.id,
            name: data.name,
            type: data.types[0].type.name,
            speed: data.stats[5].base_stat,
            img3d: `https://images.gameinfo.io/pokemon-trimmed/60/p${data.id}.webp`,
            imgSvg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
            imgFront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`,
            imgBack: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${data.id}.gif`, 
        })
        return {
            pokedexNumber: data.id,
            name: data.name,
            type: data.types[0].type.name,
            speed: data.stats[5].base_stat,
            img3d: `https://images.gameinfo.io/pokemon-trimmed/60/p${data.id}.webp`,
            imgSvg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
            imgFront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`,
            imgBack: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${data.id}.gif`, 
        };

    },
    writeData: function () {
        const filtrados = this.pokeList.filter(pokemon => ['grass', 'fire', 'water'].includes(pokemon.type));
        const sortedObj = filtrados.sort((a, b) => {
            return a._id < b._id ? -1 : a._id > b._id ? 1 : 0;
        });

        fs.writeFile("db.json", JSON.stringify(sortedObj), (err) => {
            if (err) return console.error(err);
            console.info('Guardados!');
        });
    }
}
APP.getData();