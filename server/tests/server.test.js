const expect = require('expect');
const request = require('request');

let {app} = require('./../server');
let {ToDo} = require('./../models/todo');

beforeEach((done) => {
  ToDo.remove({}).then(() => done());
});

describe('POST /todos', () => {
//   it('should create a new todo', (done) => {
//     let text = 'Test todo Text';
//
//     request(app)
//       .post('/todos')
//       .send({text})
//       .expect(200)
//       .expect((res) => {
//         expect(res.body.text).toBe(text);
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//
//         ToDo.find().then((ToDos) => {
//           expect(ToDos.length).toBe(1);
//           expect(ToDos[0].text).toBe(text);
//           done();
//         }).catch((e) => done(e));
//       });
//   });

  it('should not create todo with invalid data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        ToDo.find().then((ToDos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
