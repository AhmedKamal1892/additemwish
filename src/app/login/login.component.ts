import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private localStorageServices : LocalStorageService) { }
  ngOnInit() {
    this.localStorageServices.Regiester('admin','admin');
    this.localStorageServices.Login('admin','admin');
  }
}
