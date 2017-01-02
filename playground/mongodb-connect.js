// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

    // db.collection('ToDos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, res) => {
    //   if (err) {
    //     return console.log('Unable to insert todo.', err)
    //   }
    //
    //   console.log(JSON.stringify(res.ops, null, 2))
    // });

    // db.collection('Users').insertOne({
    //   name: 'Dominic',
    //   age: 25,
    //   location: 'Sydney'
    // }, (err, res) => {
    //   if (err) {
    //     return console.log('Unable to insert user.')
    //   }
    //
    //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), null, 2));
    // });

    db.close();
});
