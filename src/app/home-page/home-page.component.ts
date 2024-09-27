import { Component, OnInit } from '@angular/core';
import { Wishitem } from 'src/shared/model/wishitem';
import { WishService } from '../wish.service';
import events from 'src/shared/services/eventService';
import { LoginRegisterService } from '../login-register.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
    item!: Wishitem[];
    loggedinUser: { email: string; password: string; wishList: Wishitem[] } = {
        email: '',
        password: '',
        wishList: [],
    };

    title = 'angulartest';

    constructor(
        private wishservice: WishService,
        private loginRegisterService: LoginRegisterService,
        private localStorageService: LocalStorageService
    ) {
        events.listen('removewish', (wish: any) => {
            let index = this.item.indexOf(wish);
            this.item.splice(index, 1);
        });
    }

    ngOnInit(): void {
        this.startInterval();
        if (
            this.loginRegisterService.loggedInUser.email == '' &&
            this.loginRegisterService.loggedInUser.password == '' &&
            this.loginRegisterService.loggedInUser.wishList.length == 0
        ) {
            this.loggedinUser = this.localStorageService.getLoggedInUser();
            this.loginRegisterService.loggedInUser = this.loggedinUser;
        } else {
            this.loggedinUser = this.loginRegisterService.loggedInUser;
        }
        this.item = this.loggedinUser.wishList;
    }
    filter: any = () => {};

    get visibleitems(): Wishitem[] {
        return this.item?.filter(this.filter);
    }
    startInterval() {
        let intervalId = setInterval(() => {
            this.localStorageService.saveLoggedInUser(this.loggedinUser);
            this.localStorageService.saveUsers(this.loginRegisterService.users);
        }, 1000);
    }
}
