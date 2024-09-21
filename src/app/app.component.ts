import { Component, OnInit } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
import { WishService } from './wish.service';
import events from './../shared/services/eventService'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
