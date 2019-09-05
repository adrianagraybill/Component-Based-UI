# LAB - 

## Project Name

### Author: Student/Group Name

### Links and Resources
* [submission PR](https://github.com/adrianagraybill/lab-/pull/)
* [travis]([![Build Status](https://travis-ci.com/adrianagraybill/lab-.svg?branch=master)](https://travis-ci.com/adrianagraybill/lab-))
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
![Whiteboard](./assets/image.jpg)
Link to an image of the UML for your application and response to events


# LAB

## Project Name: LAB 14 Data Modeling and API server

### Author: Adriana Graybill

### Links and Resources
* [repo](https://github.com/adriana-401-advanced-javascript/lab-09/pull/3)
* [![Build Status](https://travis-ci.com/adriana-401-advanced-javascript/lab-09.svg?branch=master)](https://travis-ci.com/adriana-401-advanced-javascript/lab-09)
* [Travis link](https://travis-ci.com/adriana-401-advanced-javascript/lab-09)
* [back-end](https://lab-09-401.herokuapp.com/)

#### Documentation
* [swagger](https://localhost:/3333/api-docs) only run after npm start, does not work in heroku

### Modules
#### categories-schema.js
#### product-schema.js
#### data-model.js
#### products.js --extends dataModel
#### categories.js --extends dataModel

### Setup
#### `.env` requirements
* `PORT` - running on 3000
* `MONGODB_URI=localhost:27017/lab-09`

#### Running the app
* `npm start`
* Endpoint:  `api/v1/products` 
  * Returns a JSON object with name, description, display, inside
* Endpoint: `api/v1/categories`
  * eturns a JSON object with name, description, display, and category inside

Commands for the command line: 
Post: `echo '{"name" : "a","cateogry" : "b"}' | http post :3000/api/v1/{route}`

Put: `echo '{"category" : "a", "color" : "my put}' | http put :3000/api/v1/{route}/{id}`

Get All: `http :3000/api/v1/{route}`

Get: `http :3000/api/v1/{route}/{id}`

Delete: `http :3000/api/v1/{route}/{id}`

Running Mongo:
* start mongodb path path/to/database
* start mongod in another window
* show dbs
* run: db.products.find().pretty(); to print all items in db

#### Tests
* How do you run tests? 
* * npm run tests
* What assertions were made?
* * Asserts that sanitize work correctly
* * Asserts that post, get, put and delete work correctly for /categories
* What assertions need to be / should be made?
* * Assertions need to be made for the /products route to check categories 

#### UML
![UML: Lab ](./assets/lab--uml.)
