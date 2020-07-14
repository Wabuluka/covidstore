const express = require('express');
const router = express.Router();


// admin model
let Admin = require('../models/admin');
const { route } = require('./users');


// get admin panel
router.get('/', (req, res)=>{
    res.render('admin')
})


// admin login
router.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const login = Admin.findOne(email);
    if(login && password == login.password){
        res.redirect('/admin')
    }
})

// admin login route
router.get('/login', (req, res) =>{
    res.render('admin_login')
})


// get admin signup route route
// create admin user
router.post('/signup', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    let newAdmin = new Admin({
        username: username,
        email: email,
        password: password
    })
    newAdmin.save(()=>{
        res.redirect('/admin/login');        
    })
})
// admin login route
router.get('/signup', (req, res) =>{
    res.render('admin_signup')
})

module.exports = router;