// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar when clicking a nav link on mobile
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove('open');
    }
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-list > li > .nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(section => observer.observe(section));

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Auto-expand sub-nav for current section
document.querySelectorAll('.nav-list > li').forEach(item => {
  const subNav = item.querySelector('.sub-nav');
  if (subNav) {
    const links = subNav.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        // Toggle sub-nav visibility
        const parentLi = link.closest('li');
        const parentSubNav = parentLi.parentElement.querySelector('.sub-nav');
        if (parentSubNav.style.maxHeight === '1000px') {
          parentSubNav.style.maxHeight = '1000px';
        } else {
          parentSubNav.style.maxHeight = '1000px';
        }
      });
    });
  }
});

// Keyboard shortcut: press '/' to focus search (future enhancement)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && window.innerWidth <= 900) {
    sidebar.classList.remove('open');
  }
});
