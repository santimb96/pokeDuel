import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  url = "http://localhost:5000/pokemons"

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any>{
    return this.http.get(this.url);
  }

}
