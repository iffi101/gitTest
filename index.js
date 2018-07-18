var express = require('express'),
app = express(),
crypto = require('crypto'),
engines = require('consolidate'),
MongoClient = require('mongodb').MongoClient;
assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

MongoClient.connect("mongodb://localhost:27017/m101", function(err, db) {

if(err) throw err;

console.log("Successfully connected to MongoDB.");

app.get('/', function(req, res) {

    var algorithm = 'aes256';
    var encrypted_message = "f36731a12e6130f0ed0bccbfd9bd6ebd";

    db.collection('hw1_3').find({}).toArray(function(err, docs) {
        if(err) throw err;

        if (docs.length < 1) {
            console.dir("No documents found. Did you forget to mongorestore?");
            return res.send("No documents found. Did you forget to mongorestore?");
        }

    var doc = docs[0];
        var decipher = crypto.createDecipher(algorithm, doc['_id']);
        var decrypted = decipher.update(encrypted_message, 'hex', 'utf8') + decipher.final('utf8');
        return res.render('hello', { "name" : decrypted });
    });
});

app.use(function(req, res){
    res.sendStatus(404);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Express server listening on port %s.", port);
});
});










// var MongoClient = require('mongodb').MongoClient,
//     crypto = require('crypto'),
//     assert = require('assert');

// MongoClient.connect('mongodb://localhost:27017/m101', function(err, client) {
//     if(err) throw err;

//     var algorithm = 'aes256';
//     var encrypted_message = '7013254dca77e2c913d18cf5b70e7bba';
//     db = client.db('m101');
//     db.collection('hw1_2').find({}).toArray(function(err, docs) {
//         if(err) throw err;

//         if (docs.length < 1) {
//             console.dir("No documents found");
//             return db.close();
//         }
        
// 	var doc = docs[0];
//         var decipher = crypto.createDecipher(algorithm, doc['_id']);
//         var decrypted = decipher.update(encrypted_message, 'hex', 'utf8') + decipher.final('utf8');
//         console.log("Answer: " + decrypted);
//         return client.close();
//     });
// });






// const express = require('express')
// const app =  express();
// app.use(express.json());
// const mongoClient = require('mongodb').MongoClient;
// var assert= require('assert');

// mongoClient.connect('mongodb://localhost:27017/mydb', (err,client)=>{
//         assert.equal(null,err)
//           console.log('connection ');
//           var db = client.db('myDb');
//             db.collection('movies').find({},{'_id':0}).toArray( (err,docs)=> {
//             docs.forEach(element => {
//                     console.log(element);
//                 });
//             })

// })









//const logger= require('./logger');
// const obj={
//     'name' : 'value'
// }
// app.get('/', (req,res)=>{
//     res.send('App is working');
// })

// app.get('/api/course/:id', (req,res)=> {    
//     res.send(req.params.id);
//     res.end();
// })



// const PORT = process.env.PORT || 3000;
// app.listen(PORT, ()=>{

//     console.log(`listening on ${PORT}`);
// })