const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');


// mongodb
mongoose.connect(config.db);
let mongoDb = mongoose.connection;

mongoDb.once('open', function(){
    console.log('DB connected')
})
mongoDb.on('error', function(err){
    console.log(err)
})


// routes
let userRoutes = require('./routes/users');
let indexRoutes = require('./routes/index');
let adminRoutes = require('./routes/admin');



// Initialize the Express App
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// morgan
app.use(morgan('dev'))
// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// routes in actual use
app.use('/users', userRoutes);
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);



// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});