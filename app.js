const express = require('express');
const path = require('path');



// routes
let userRoutes = require('./routes/users');
let indexRoutes = require('./routes/index');
let adminRoutes = require('./routes/admin');



// Initialize the Express App
const app = express();

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

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