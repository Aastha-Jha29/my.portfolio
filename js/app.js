/**
 * Aastha Jha — Personal Portfolio
 * Main Application Coordinator
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Navbar Scroll & Scroll Progress Bar ---
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Progress Bar
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Navbar style
    if (navbar) {
      if (scrollTop > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.soundSystem) window.soundSystem.click();
    });
  }

  // --- 2. Mobile Navigation Menu Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      if (window.soundSystem) window.soundSystem.click();
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // --- 3. Scroll Reveal Animations (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // --- 4. Toast Notification System ---
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    if (window.soundSystem) window.soundSystem.success();

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // 1-Click Copy Email
  const copyEmailBox = document.getElementById('copy-email-btn');
  if (copyEmailBox) {
    copyEmailBox.addEventListener('click', () => {
      const email = 'aasthajha406@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied "${email}" to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  // --- 5. Quick Prompt Chips in Contact Form ---
  const promptChips = document.querySelectorAll('.prompt-chip');
  const messageInput = document.getElementById('contact-message');

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-text');
      if (messageInput) {
        messageInput.value = text;
        messageInput.focus();
      }
      if (window.soundSystem) window.soundSystem.pop();
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formSuccessAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      if (!name || !email || !message) {
        showToast("Please fill in all fields before sending.");
        return;
      }

      if (formSuccessAlert) {
        formSuccessAlert.classList.add('active');
        formSuccessAlert.innerHTML = `🌸 Thank you, ${name}! Your message has been received. I will reply to you at ${email} shortly.`;
      }
      contactForm.reset();
      showToast("Message sent successfully!");
    });
  }

  // --- 6. Real-Time Local Clock (Begusarai, Bihar / IST) ---
  function updateLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds} (IST / Bihar, India)`;
  }
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // --- 7. Soft Sound FX Navigation Toggle ---
  const audioToggleBtn = document.getElementById('audio-toggle');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const isEnabled = window.soundSystem.toggle();
      audioToggleBtn.classList.toggle('active', isEnabled);
      if (isEnabled) {
        audioToggleBtn.style.background = '#fce7f3';
        showToast("Soft Sound FX Enabled 🌸");
        window.soundSystem.success();
      } else {
        audioToggleBtn.style.background = '';
        showToast("Sound FX Muted 🔇");
      }
    });
  }
});
