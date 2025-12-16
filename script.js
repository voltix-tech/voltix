 // Simple scroll reveal
    const revealElements = document.querySelectorAll('section');

    const reveal = () => {
      const trigger = window.innerHeight * 0.85;
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });
    };

    revealElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.transition = '0.8s ease';
    });

    window.addEventListener('scroll', reveal);
    reveal();

    const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // один раз
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));
