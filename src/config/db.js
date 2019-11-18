var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db_employees');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,
    role: String
});


var User = mongoose.model('User', userSchema);
module.exports = User;