// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  firebase: {
    apiKey: "AIzaSyAA3kLXy0ln6s4lZEYnxcu_Oe21H-v0xFM",
    authDomain: "todo-ca497.firebaseapp.com",
    databaseURL: "https://todo-ca497.firebaseio.com",
    projectId: "todo-ca497",
    storageBucket: "todo-ca497.appspot.com",
    messagingSenderId: "364860663808"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
