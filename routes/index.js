const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const projects = require('../data/projects');

// Home page
router.get('/', (req, res) => {
  const featuredProjects = projects.filter((p) => p.featured);
  res.render('index', {
    title: 'Michael Baxter | Technical Designer',
    featuredProjects,
    currentPage: 'home',
  });
});

// Contact POST
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.render('index', {
      title: 'Michael Baxter | Technical Designer',
      featuredProjects: projects.filter((p) => p.featured),
      currentPage: 'home',
      contactError: 'Please fill in all required fields.',
      formData: req.body,
    });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.render('index', {
      title: 'Michael Baxter | Technical Designer',
      featuredProjects: projects.filter((p) => p.featured),
      currentPage: 'home',
      contactError: 'Please enter a valid email address.',
      formData: req.body,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #00d4ff;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    res.render('contact-success', {
      title: 'Message Sent | Michael Baxter',
      name,
      currentPage: 'home',
    });
  } catch (err) {
    console.error('Mail error:', err);
    res.render('index', {
      title: 'Michael Baxter | Technical Designer',
      featuredProjects: projects.filter((p) => p.featured),
      currentPage: 'home',
      contactError:
        'There was an error sending your message. Please try again later or email me directly.',
      formData: req.body,
    });
  }
});

module.exports = router;