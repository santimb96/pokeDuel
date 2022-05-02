import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this._pokemonService.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      this.pokemons = pokemons;
      return this.pokemons;
    }, error => {
      console.log(error);
    })
  }

}
