const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io'); // Import socket.io
const { getRandomFunFact } = require('./utils/funFacts'); // Import the helper function added this delete

const sequelize = require('./config/connection');
const SessionStore = require('express-session-sequelize')(session.Store);

const app = express();
const port = 3000;

// Set up Handlebars middleware with a default layout
app.engine('handlebars', engine({
  defaultLayout: 'main', // This sets 'main.handlebars' as your default layout
}));
app.set('view engine', 'handlebars');


// Set up session middleware
app.use(session({
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
      },
      resave: false,
      saveUninitialized: true,
    store: new SessionStore({ db: sequelize }),
}));

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Middleware to make session data available to Handlebars templates
app.use((req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
});


// Import routes
const routes = require('./routes/route'); // Ensure this path is correct
app.use(routes);

// Set up WebSocket server
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});




sequelize.sync({ force: false }).then(() => {
    server.listen(port, () => console.log(`Server is running on port ${port}`));
  });