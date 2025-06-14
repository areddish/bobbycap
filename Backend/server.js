require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const allowedUsers = ["user1@example.com", "user2@example.com"];


const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:3000/dashboard'); // Redirect to frontend after login
  }
);

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  
}));

app.get('/auth/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    req.session.destroy(() => {
      res.redirect('http://localhost:3000');  
    });
  });
});









app.get('/auth/user', (req, res) => {
  res.json(req.user || null);
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});