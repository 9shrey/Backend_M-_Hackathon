

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
    res.render('index', {
        title: 'CodeBlooded',
        MainTitle: 'Nigga',
        isAuthenticated: req.session.isAuthenticated,
        username: req.session.account?.username,
    });

});

module.exports = router;




// var express = require('express');
// var router = express.Router();

// // Display the login form
// router.get('/', function (req, res, next) {
//     res.render('login', {
//         title: 'Login',
//         isAuthenticated: req.session.isAuthenticated,
//     });
// });

// // Handle form submission
// router.post('/', function (req, res, next) {
//     var username = req.body.username;
//     var password = req.body.password;

//     // Here, you can add your authentication logic to check the username and password
//     // For simplicity, this example doesn't include the actual authentication code

//     if (username === 'your_username' && password === 'your_password') {
//         req.session.isAuthenticated = true;
//         req.session.account = { username: username };
//         res.redirect('/dashboard'); // Redirect to the dashboard upon successful login
//     } else {
//         res.render('login', {
//             title: 'Login',
//             isAuthenticated: false,
//             errorMessage: 'Invalid username or password',
//         });
//     }
// });

// module.exports = router;

