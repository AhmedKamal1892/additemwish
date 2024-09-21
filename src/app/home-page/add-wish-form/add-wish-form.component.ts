import { Component ,Output,EventEmitter} from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  @Output() addwish=new EventEmitter<Wishitem>()
newwishitem=''
addnewwishitem(){
  this.addwish.emit(new Wishitem(this.newwishitem))
  this.newwishitem=''
  //todo: add wish to item array
  //clear textbox
}
}
