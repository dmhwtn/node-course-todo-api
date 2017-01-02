// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

    // db.collection('ToDos').findOneAndUpdate({
    //   _id: new ObjectID('5869af20728803bffc74a74b')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: 123
    }, {
      $set: {name: 'Dominic'},
      $inc: {age: 5}
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });


    //db.close();
});
