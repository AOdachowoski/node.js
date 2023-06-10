// const { Person } = require('./person');
// const person = new Person('Amanda')
const dotenv = require('dotenv');

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();


// console.log(person.sayMyName())
// require('./modules/path')
// require('./modules/fs')
// require('./modules/http')
require('./modules/express')