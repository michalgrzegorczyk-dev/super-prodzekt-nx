# STORE - plan działania, linki, informacje
## AUTH Store
Store odpowiedzialny za autentykacje użytkownika (możliwe że za wielka rzecz do tego ale zrobiona dla poćwiczenia)

1. Utworzenie JSONa z danymi użytkownika [link do pliku](../libs/shared/data-access-user/assets/users.json)
2. Utworzenie serwisu do ściągania danych (user.service) i utworzenie metody checkCredentials, która będzię wysyłać request sprawdzający email i hasło
3. Utworzyć akcję która w stronie do logowania będzie przekazywać email i hasło do efektu `auth.actions.ts`
```ts
export const checkCredentials = createAction(
  '[Auth] Check credentails',
  props<{ credentials: UserCredential }>()
);
```
4. Stworzenie efektu reagującego na akcje `checkCredentials` w pliku `auth.effects.ts` który będzie generować akcję `loginSuccess` lub `loginFailure` w zależności od wartości zwróconej przez metodę `checkCredentails` serwisu `UserService`
```ts
  checkCredentials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkCredentials),
      mergeMap(({ credentials }) =>
        this.userService
          .checkCredentials(credentials.email, credentials.password)
          .pipe(
            map((user: User | undefined) => {
              if (!!user) {
                return AuthActions.loginSuccess({ user });
              }
              return AuthActions.loginFailure();
            })
          )
      )
    )
  );
```
5. Umieszczenie użytkownika w storze za pomocą reducera
```ts 
const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    loggedUser: user,
    isLoginFailed: false,
  })),
  on(AuthActions.loginFailure, (state) => ({ ...state, isLoginFailed: true }))
);
```
6. Po poprawnym zalogowaniu następuję przekierowanie na stronę startową. W tym celu stworzono efekt w pliku `auth.effects.ts`
```ts
  redirectToHomePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
  ```
  Dispatch ustawiony na false jest konieczny ponieważ nie potrzebujemy generować (dispatchować) akcji dla tego efektu
7. Do komponent `navbar.component.ts` wstrzykujemy fasade stora po uprzednim zaktualizowaniu `shared-ui.module.ts` i dodajemy odpowiednie metody i pola
```ts
  selector: 'super-prodzekt-nx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private readonly store: AuthFacade) {}

  isUserLogged$ = this.store.isUserLogged$;
  loggedUser = this.store.loggedUser$;
  
  onLogout() {
    this.store.logoutUser();
  }
}
```



## Uwagi

### Wstrzyknięcie store'a do aplikacji
Aby wstrzyknąć store'a z biblioteki shared-data-access-user należy do app.module aplikacji zmodifikować następujące pliki:
* `webpack.config.js` - didajemy ścieżkę do biblioteki do wywłoania metody `sharedMappings.register`
```js
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  tsConfigPath,
  [
    /* mapped paths to share */
    '@super-prodzekt-nx/shared/data-access-user',
  ],
  workspaceRootPath
);

```
* `app.module.ts` - należy dodać do importu moduł biblioteki ze storem (w naszym wypadku `SharedDataAccessUserModule`) `StoreModule` i/lub `EffectModule`
```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...
    SharedDataAccessUserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
### Shared assets
Coś nie działają shared assets w bibliotece. Zrobić research jak to się robi albo się kogoś zapytać.

## Linki
https://itnext.io/building-angular-micro-frontend-with-ngrx-state-sharing-and-nx-cli-7e9af10ebd03 - stronka pokazująca jak utworzyć stora w aplikacji angular mfe z nx