module.exports = function(app,db){
    app.get('/notes',(req,res) => {              
         db.find({}).toArray(function(err, result) {
            if (err) throw err; 
            console.log(result);
            res.send(result);
          });
    });
     app.post('/addCus',(req,res) => { 
         var Customer = [{
             _id:1,
             lastName:'Thanh',
             firstName:'Pham',
             phone:'828349'
         },
         {
            _id:2,
            lastName:'Thanh1',
            firstName:'Pham1',
            phone:'82834937'
        },
        {
            _id:3,
            lastName:'Thanh3',
            firstName:'Pham3',
            phone:'8283493'
        }]
      db.insert(Customer,function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:',result);
            res.send('Thanh cong');
          }        
        });
    });

}