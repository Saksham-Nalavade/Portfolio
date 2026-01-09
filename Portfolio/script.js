// Simple scroll animation using Intersection Observer
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});

// Fade-in animation styles
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 1s ease-in forwards;
    opacity: 0;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;
document.head.appendChild(style);
