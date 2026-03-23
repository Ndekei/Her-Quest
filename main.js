/* =============================================================
   HER QUEST — main.js
   Scroll Reveal, Animations, Counter, Nav, Form Handling
   ============================================================= */

(() => {
  'use strict';

  /* ----- HERO IMAGE LOAD ANIMATION ----- */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('load', () => {
      hero.classList.add('loaded');
    });
  }

  /* ----- HERO WORD STAGGER ON LOAD ----- */
  const heroWords = document.querySelectorAll('.hero__word');
  window.addEventListener('load', () => {
    heroWords.forEach((word, i) => {
      setTimeout(() => {
        word.classList.add('in-view');
      }, 300 + i * 160);
    });
  });

  /* ----- HERO EYEBROW & SUB STAGGER ----- */
  const heroRevealItems = document.querySelectorAll(
    '.hero__eyebrow.reveal, .hero__sub.reveal, .hero__actions.reveal'
  );
  window.addEventListener('load', () => {
    heroRevealItems.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('in-view');
      }, 900 + i * 200);
    });
  });

  /* ----- NAVIGATION: SCROLL BEHAVIOUR ----- */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  /* ----- NAVIGATION: MOBILE BURGER MENU ----- */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----- SCROLL REVEAL (Intersection Observer) ----- */
  const revealEls = document.querySelectorAll('.reveal:not(.hero__eyebrow):not(.hero__sub):not(.hero__actions)');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0;
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ----- NAOMI NAME UNDERLINE ----- */
  const naomiName = document.querySelector('.naomi__name-underline');
  if (naomiName) {
    const nameObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          nameObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    nameObserver.observe(naomiName);
  }

  /* ----- CTA PARALLAX IMAGE TRIGGER ----- */
  const ctaSection = document.querySelector('.cta-section');
  if (ctaSection) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    ctaObserver.observe(ctaSection);
  }

  /* ----- ANIMATED COUNTER ----- */
  const counterNums = document.querySelectorAll('.cohort__counter-num');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counterNums.forEach(num => animateCounter(num));
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  if (counterNums.length) {
    const counterEl = document.querySelector('.cohort__counter');
    if (counterEl) counterObserver.observe(counterEl);
  }

  /* ----- MAGNETIC BUTTON HOVER EFFECT ----- */
  const magnetButtons = document.querySelectorAll('.btn--primary, .btn--clay');

  magnetButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-2px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* ----- SMOOTH ACTIVE NAV LINK HIGHLIGHT ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
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
  }, { threshold: 0.4 });

  sections.forEach(section => sectionObserver.observe(section));

  /* ----- PARALLAX HERO IMAGE ON SCROLL ----- */
  const heroImg = document.querySelector('.hero__img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      heroImg.style.transform = `scale(1) translateY(${rate}px)`;
    }, { passive: true });
  }

  /* ----- JOIN FORM SUBMISSION ----- */
  const joinForm = document.getElementById('joinForm');
  const formSuccess = document.getElementById('formSuccess');

  if (joinForm && formSuccess) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('firstName').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!name || !email) {
        // Simple visual shake
        joinForm.style.animation = 'shake 0.4s ease';
        setTimeout(() => { joinForm.style.animation = ''; }, 500);
        return;
      }

      joinForm.style.opacity = '0';
      joinForm.style.transform = 'translateY(-10px)';
      joinForm.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

      setTimeout(() => {
        joinForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }, 450);
    });
  }

})();
