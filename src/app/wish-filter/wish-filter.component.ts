import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
const filters=[
  (item:Wishitem) => item ,
  (item:Wishitem) =>!item.checked,
  (item:Wishitem)=> item.checked
];
@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  item!:Wishitem[]
  @Output() filter= new EventEmitter<any>()
  constructor(){}
  ngOnInit(): void {
    this.filter.emit(filters[0])
  }
  listfilter:string='0'
  changeFilter(v:any){
    this.filter.emit(filters[v])
  }
}
