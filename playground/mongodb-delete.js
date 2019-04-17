//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
   if(err){
       return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');
   //deleteMany
   // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result)=>{
   //    console.log(result);
   // });
   //deleteOne
   // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result)=>{
   //       console.log(result);
   //   });
   // findAndDelete
   // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
   //    console.log(result);
   // });
   db.collection('Users').deleteMany({name: "Alex"});

   db.collection('Users').findOneAndDelete({_id: new ObjectID("5cafe261ef6241d864b0b283")}).then((results)=>{
         console.log(JSON.stringify(results,undefined, 2));
       });
  // client.close();
});

