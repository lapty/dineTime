## Baby Mean - small reference app for the mean stack
Nothing groundbreaking here!  This app is intended as a learning tool that consists of Angular, Node, MongoDB, and Express with CRUD.

Would not recommend use in a production environment!

### Directory Structure

``` javascript
|- public                       // public folder (angularjs files)
|  |- components                // bower components
|  |- css
|  |- js
|  |- posts                     // posts feature
|  | |- views
|  | | |- create.html
|  | | |- edit.html
|  | | |- list.html
|  | | |- show.html
|  | |- posts.js
|  | |- postsController.js
|  | |- postsServices.js
|  |- views                    // app common views
|  | |- main.html
|  |- app.js                   // main angular module
|  |- homeCtrl.js              // default home controller
|- routes
|  |- index.js
|- views                        // server side templates, NOTE: check layout.jade
|  |- index.jade
|  |- layout.jade
|- .bowerrc                     // tells bower where to install dependencies
|- .gitignore
|- .npmignore
|- app.js                       // main nodejs app file
|- bower.json
|- Gruntfile.js                 // grunt task runner file
|- package.json
|- Procfile

```
