import { Component, OnInit } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
import { WishService } from './wish.service';
import events from './../shared/services/eventService'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //variable has type of array of wishitem objects
  item!:Wishitem[]


  title = 'angulartest';

  constructor(private wishservice:WishService){
    events.listen('removewish',(wish:any)=>{
    let index =this.item.indexOf(wish)
    this.item.splice(index,1)
    })
  }
  ngOnInit(): void {
      this.wishservice.getwishes().subscribe((data:any)=>{
        this.item=data
      })
  }
filter:any=()=> {

}

get visibleitems():Wishitem[]{
  return this.item.filter(this.filter)
}



}
