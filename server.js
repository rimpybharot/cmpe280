var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var index = require('./routes/index');
var about = require('./routes/about');
var login = require('./routes/login')

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



//Set Static Folder
app.use(express.static(path.join(__dirname,'client')));



//Body Parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/',index);
app.use('/',login)
app.use('/', about);



app.listen(port, function(){
    console.log("Sever started on port : "+port);

});
