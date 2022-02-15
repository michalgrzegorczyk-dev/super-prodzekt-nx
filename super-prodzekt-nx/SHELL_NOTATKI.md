# SHELL Notatki

## @angular-architects/module-federation
Biblioteka kótra pomaga w implementacji module federation w projekcie angularowym
https://www.npmjs.com/package/@angular-architects/module-federation

## Jak używać?
Dla nx:
1. Zainstalować bibliotekę `npm install @angular-architects/module-federation`
2. Należy stworzyć nową apkę, np. shell. Nastęonie użyć komendy `ng g @angular-architects/module-federation:init`


## Komendy użyte do wygenerowania aplikacji mfe
 * Host - nx-shell
`npx nx g application --name nx-shell --port 4300 --mfe true --mfeType host`
 * Remote - login
`npx nx g application --name login --port 4301 --mfe true --mfeType remote --routing true --host nx-shell`
 * Shared - user service
`npx nx g @nrwl/angular:lib shared/data-access-user`
`npx nx g @nrwl/angular:service user --project=shared-data-access-user`

## Jak spowodować by `UserService`był dzielony pomiędzy aplikajami?
Serwis należy exportować w pliku `index.ts` wewnątrz biblioteki.

Należy do pliku `webpack.config.js` do metody register dodać ścieżkę do bibliteki w każdej z aplikacji

```js
sharedMappings.register(
  tsConfigPath,
  [
    /* mapped paths to share */
    '@super-prodzekt-nx/shared/data-access-user'
  ],
  workspaceRootPath
);
```

Aby odpalić wszystkie aplikację należy użyć komendy `npm run start:mfe` z package.json lub `npx nx run nx-shell:serve-mfe`
