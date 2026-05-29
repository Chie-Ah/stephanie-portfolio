// Scroll reveal
const revealEls = document.querySelectorAll(
  '.section, .project, .project-wide, .tl-row, .cred, .stat-item, .skill-block'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 55);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });

revealEls.forEach(el => io.observe(el));
