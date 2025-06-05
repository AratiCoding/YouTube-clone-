## Backend (Javascript)
run above command to initializ a project 
```javascript
npm init
```
this command will create a package.json file in the project folder
------------------
nodemon is a dev dependancy means only used in development not production.
```javascript
node i nodemon
```
install following packages
```javascript
npm i mongoose express dotenv
```

## Important note :
 - Whenever you are trying to communicate with database issues may occure so best practice is  use try catch or promises which resolve error with resolve reject
-  Databse takes time hence it is recommended to use async await. 

### Method
app.use() method is used for middlewares and config

### mongoose library
query pagination library
```javascript
npm i mongoose-aggregate-paginate-v2
```
library to help you hash passwords.
```javascript
npm i bcrypt
npm install jsonwebtoken
```