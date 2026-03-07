
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');


  const icon = hamburger.querySelector('i');
  icon.className = mobileMenu.classList.contains('open')
    ? 'bx bx-x'
    : 'bx bx-menu';
});


function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.querySelector('i').className = 'bx bx-menu';
}

/* Close mobile menu when clicking outside */
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMobile();
  }
});

const header     = document.getElementById('header');
const scrollupBtn = document.getElementById('scrollup');
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const y = window.scrollY;


  header.classList.toggle('scrolled', y > 30);


  scrollupBtn.classList.toggle('show', y > 400);

  sections.forEach((sec) => {
    const top = sec.offsetTop - 110;
    const bot = top + sec.offsetHeight;

    if (y >= top && y < bot) {
      navAnchors.forEach((a) => a.classList.remove('active'));
      const match = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if (match) match.classList.add('active');
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);


document.querySelectorAll('.anim, .stagger').forEach((el) => {
  revealObserver.observe(el);
});

const roles = [
  'React Developer',
  'CS Student',
];

let roleIndex   = 0;   
let charIndex   = 0;   
let isDeleting  = false;

const typedSpan = document.getElementById('typed');

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
   
    charIndex++;
    typedSpan.textContent = currentRole.slice(0, charIndex);

    if (charIndex === currentRole.length) {

      isDeleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
    setTimeout(typeLoop, 90);

  } else {

    charIndex--;
    typedSpan.textContent = currentRole.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting  = false;
      roleIndex   = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeLoop, 55);
  }
}


if (typedSpan) {
  setTimeout(typeLoop, 800);
}

const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    submitBtn.innerHTML = '<i class="bx bx-check"></i>&nbsp; Message Sent!';
    submitBtn.style.background = '#0aaa7d';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="bx bx-send"></i>&nbsp; Send Message';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      contactForm.reset();
    }, 3200);
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMobile();
  });
});

