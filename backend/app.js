const experss = require('experss');
const experss = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';

const app = experss();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on("open", function() {
    console.log("Connected....");
});



