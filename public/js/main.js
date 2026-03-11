// ============================================
//  NAVBAR — scroll effect
// ============================================
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ============================================
//  MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);

    // Animate hamburger → X
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });
}

// ============================================
//  SKILL BAR ANIMATIONS
// ============================================
function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    fill.style.width = width + '%';
  });
}

// ============================================
//  INTERSECTION OBSERVER — fade-in & skill bars
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Trigger skill bars when skills section is visible
      if (entry.target.classList.contains('skills')) {
        animateSkillBars();
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll(
  '.section, .skill-card, .featured-card, .project-card'
).forEach(el => observer.observe(el));

// ============================================
//  PROJECT FILTER (projects page)
// ============================================
const filterBtns  = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const noResults    = document.getElementById('noResults');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;

        if (show) {
          card.style.display = '';
          card.classList.add('visible');
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

// ============================================
//  SMOOTH SCROLL for anchor links
// ============================================
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').replace('/', '');
    // Only handle if we're already on the home page
    if (window.location.pathname === '/') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ============================================
//  CONTACT FORM — client-side validation feedback
// ============================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name    = contactForm.querySelector('#name').value.trim();
    const email   = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return;
    }

    // Show a loading state
    const submitBtn = contactForm.querySelector('[type="submit"]');
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
  });
}