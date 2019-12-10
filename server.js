const express = require('express');
const mongoC = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/';
const app = express();
const port = 8000;
const route = require('./app/routes/notes');
const CusAll = require('./app/model/DaoCustomer');
app.set('view engine', 'pug');
var result = 'thanh cong';

app.use(bodyParser.urlencoded({ extended: true}));

mongoC.connect(url,{useUnifiedTopology: true}, function  (err, client) {
    if (err) {
    result = 'khong thanh cong';
    console.log("hello "+result);
    } else {
      //HURRAY!! We are connected. :)
      console.log('Connection established to', url);
      // do some work here with the database.
      var db = client.db('shop');
      var collection = db.collection('Customer');
      route(app,collection);
      app.listen(port,() =>{
        console.log("hello "+result);   
    });
}
});

