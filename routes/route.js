const express = require('express');
const { getRandomFunFact } = require('../utils/funFacts');
const router = express.Router();
const { User } = require('../models');


const apiRoutes = require('./api'); // Ensure this path is correct // GET,PUT,POST,DEL -> /api

router.use('/api', apiRoutes);

// Define comments array to store comments
let comments = [];

const seedQuizData = require('../seeds/quizData.js');

// Example quiz data
const quizData = JSON.stringify(seedQuizData);

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Define routes
router.get('/home', isLoggedIn, (req, res) => res.render('home', { funFact: getRandomFunFact() }));
router.get('/login', (req, res) => res.render('login', { query: req.query }));
router.get('/signup', (req, res) => res.render('signup', { query: req.query }));
router.get('/comments', isLoggedIn, (req, res) => res.render('comments', { comments }));
router.get('/quiz', isLoggedIn, (req, res) => res.render('quiz', { quizData: encodeURIComponent(quizData) }));

router.get('/spotify', isLoggedIn, (req, res) => {
    res.render('spotify', {
        layout: false, // Assuming you don't want to use the default layout
        tracks: [] // Initially, there are no tracks to display
    });
});

router.post('/spotify-search', isLoggedIn, async (req, res) => {
    const searchKeyword = req.body.search; // Assuming your input field is named 'search'
    // Logic to call Spotify's search API with the searchKeyword
    // Process the response from Spotify
    // Send the search results back to the client
});



router.post('/submit-comments', isLoggedIn, (req, res) => {
    const comment = req.body.comment;no
    if (comment) {
        comments.push(comment);
    }
    res.redirect('/comments');
});

router.post('/submit-login', async (req, res) => {

    // Here you would normally validate the user's credentials
    // For this example, we'll just set the session variable
    req.session.isLoggedIn = true; // Set isLoggedIn to true after successful login

    res.redirect('/login');

});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home');
        }
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});

// Helper function to format dates as MM/DD/YY
function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear().toString().substr(-2);

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [month, day, year].join('/');
}

// Modify your existing route to use the formatDate function
router.get('/comments', isLoggedIn, (req, res) => {
    const formattedComments = comments.map(comment => ({
        text: comment.text,
        date: formatDate(comment.date) // Use the formatDate function here
    }));
    res.render('comments', { comments: formattedComments });
});

// Modify your submit-comment route as well
router.post('/submit-comment', isLoggedIn, (req, res) => {
    const comment = {
        text: req.body.comment,
        date: formatDate(new Date()) // And also here
    };
    if (comment.text) {
        comments.push(comment);
    }
    res.redirect('/comments');
});

// This route should be defined using the router instance, not app
router.get('/', (req, res) => {
    res.render('home', { funFact: getRandomFunFact() });
});

module.exports = router;
