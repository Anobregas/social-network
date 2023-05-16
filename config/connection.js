const { connect, connection } = require('mongoose');
console.log("nob")
connect('mongodb://127.0.0.1:27017/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("regas")
module.exports = connection;
