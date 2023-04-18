// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   DIR_APP_THUMBS_AVATAR: "assets/images/thumbs_avatar/",
//   // URL_API: "http://localhost:3333/",
//   URL_VIRTUALWORLD: "http://localhost:3321/",
//   DIR_VW_THUMBS: "images/thumbs/"
// };

export const environment = {
  production: false,
  DIR_APP_THUMBS_AVATAR: "assets/images/thumbs_avatar/",
  URL_API: "https://bcfh5v7dz4.execute-api.sa-east-1.amazonaws.com/master/",
  URL_VIRTUALWORLD:"http://metasee-virtualworld.herokuapp.com/",
  DIR_VW_THUMBS: "images/thumbs/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
