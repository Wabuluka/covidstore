const express = require('express');
const router = express.Router();

// admin login route
router.get('/login', (req, res) =>{
    res.render('admin_login')
})

module.exports = router;