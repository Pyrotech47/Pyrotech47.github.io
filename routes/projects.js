const express = require('express');
const router = express.Router();
const projects = require('../data/projects');

// All projects
router.get('/', (req, res) => {
  const categories = [...new Set(projects.map((p) => p.category))];
  res.render('projects', {
    title: 'Projects | Michael Baxter',
    projects,
    categories,
    currentPage: 'projects',
  });
});

// Single project
router.get('/:id', (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);

  if (!project) {
    return res.status(404).redirect('/projects');
  }

  const related = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        p.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3);

  res.render('project-detail', {
    title: `${project.title} | Michael Baxter`,
    project,
    related,
    currentPage: 'projects',
  });
});

module.exports = router;