// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

    // deleteMany
    // db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //   console.log(res);
    // });

    //deleteOne
    // db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //   console.log(res);
    // });

    //findOneAndDelete
    // db.collection('ToDos').findOneAndDelete({completed: false}).then((res) => {
    //   console.log(res);
    // });

    db.collection('Users').deleteMany({name: 'Dominic'});

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5868b84e25edd01304b40101')
    }).then((res) => {
      console.log(JSON.stringify(res, null, 2));
    });

    //db.close();
});
