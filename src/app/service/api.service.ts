import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "https://rickandmortyapi.com/api/character"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  deletePerson(id: number) {
    return this.http.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  constructor(private http: HttpClient) { }
getCharacters(){

  return this.http.get(URL);
  
}
createCharacter(newCharacter: any){
  return this.http.post("https://api.escuelajs.co/api/v1/users", newCharacter)
}

}
