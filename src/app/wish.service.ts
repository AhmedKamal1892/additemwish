import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) {
}
getwishes(){
  return this.http.get('assets/wishes.json')
}
}
