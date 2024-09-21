import { Component, OnInit } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
import { WishService } from '../wish.service';
import events from 'src/shared/services/eventService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
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
