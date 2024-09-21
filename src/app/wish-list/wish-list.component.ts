import { Component,Input } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
import events from './../../shared/services/eventService'
@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  @Input() item!:Wishitem[]
  toggleclick(x:Wishitem){
    x.checked=!x.checked
    console.log(x)
  }
  removewish(wish:Wishitem){
    events.emit('removewish',wish)
  }
  onEdit(index:number){
    this.item[index].isEditable=true
  }
  onSave(index:number,newtask:string){
this.item[index].wishitem=newtask;
this.item[index].isEditable=false
  }
}





