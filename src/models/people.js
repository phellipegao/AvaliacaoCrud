const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PeopleSchema = new Schema({
 nome: String,
 idade: Number,
 sexo: String,
});
module.exports = mongoose.model('People', PeopleSchema);