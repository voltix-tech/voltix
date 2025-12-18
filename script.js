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


// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const terminalLines = [
  "> initializing portfolio...",
  "> loading ui modules...",
  "> loading animations...",

  "Graphic Designer & Developer",
  "",
  "> skills",
  "HTML • CSS • JavaScript • UI/UX",
  "",
  "> status",
  "Available for work 🚀",
  "",
  "> launch"
];

const terminalText = document.getElementById("terminal-text");
const terminalLoader = document.getElementById("terminal-loader");

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
  if (lineIndex >= terminalLines.length) {
    setTimeout(() => {
      terminalLoader.classList.add("hidden");
    }, 800);
    return;
  }

  const line = terminalLines[lineIndex];

  if (charIndex < line.length) {
    terminalText.textContent += line.charAt(charIndex);
    charIndex++;
    setTimeout(typeTerminal, 30);
  } else {
    terminalText.textContent += "\n";
    lineIndex++;
    charIndex = 0;
    setTimeout(typeTerminal, 300);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeTerminal, 500);
});


