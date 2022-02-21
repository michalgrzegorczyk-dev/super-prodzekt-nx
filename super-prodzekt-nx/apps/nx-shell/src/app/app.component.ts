import {Component, OnInit} from '@angular/core';
import {UserService} from "@super-prodzekt-nx/shared/data-access-user";
import {Router} from "@angular/router";
import {distinctUntilChanged} from "rxjs";

@Component({
  selector: 'super-prodzekt-nx-root',
  template: `
<!--    <header>Super header super prodzektu-->
<!--      <div *ngIf="isLoggedIn$ | async">User zalogowany</div>-->
<!--    </header>-->
<!--    <div *ngIf="isLoggedIn$ | async; else signIn">-->
<!--      You are authenticated so you can see this content.-->
<!--    </div>-->
<!--    <ng-template #signIn>-->
<super-prodzekt-nx-navbar></super-prodzekt-nx-navbar>
      <router-outlet></router-outlet>
<!--    </ng-template>-->
    <footer>Super footer super prodzektu</footer>
  `,
  styles: [`
    header {
      width: 100%;
      height: 5rem;
      background-color: red;
      color: white
    }

    footer {
      width: 100%;
      height: 3rem;
      background-color: blue;
      color: white
    }
  `]
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private readonly userService: UserService, private readonly router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn$.pipe(distinctUntilChanged())
      .subscribe((loggedIn: boolean) => {
        // loggedIn = true;
        // if (!loggedIn) {
        //   this.router.navigateByUrl('');
        // } else {
          // this.router.navigateByUrl('account');
        // }
      })
  }
}
