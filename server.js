require('dotenv').config();
const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: 'Too many messages sent. Please try again later.',
});

// Routes
app.use('/', indexRouter);
app.use('/projects', projectsRouter);

// Apply rate limit to contact POST
app.use('/contact', contactLimiter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('index', {
    title: '404 - Page Not Found',
    error: 'Page not found',
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong. Please try again later.');
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});