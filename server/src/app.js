const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const connectDb = require('./db/connect');
const cars = require('./routes/carsrouter');
const authRoutes = require('./routes/authRoutes');
const users = require('./routes/usersrouter');

const app = express();

dotenv.config({ path: `${__dirname}/.env` });
require('./config/passport'); // Passport config

app.use(express.json());

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
  })
);



// Passport init
app.use(passport.initialize());
app.use(passport.session());


app.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({
            message: 'User authenticated',
            user: req.user
        });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

// Routes
app.use('/api/cars', cars);
app.use('/auth', authRoutes);
app.use('/api/users',users);
// app.use('/api/uploads',uploads);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});



// DB Connect & Start Server
const connect = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT || 8081, () => {
      console.log(`Server running on port ${process.env.PORT || 8081}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

connect();
