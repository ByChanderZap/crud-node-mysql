const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection')
const app = express();


//Importing routes
const customerRoutes = require('./routes/customer.js');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'Kromaroth55',
  port: 3306,
  database: 'crudnodejs'
}, 'single'));


//routes
app.use('/', customerRoutes);


// Static Files
app.use(express.static(path.join(__dirname, 'public')));



//Empezando el servidor
app.listen(app.get('port'), () => {
  console.log('server on port 3000');
});
