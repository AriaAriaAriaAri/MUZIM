/* =================================================================
   MUZIM Site Interactivity
================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -------- Pricing toggle (Monthly / Yearly) -------- */
  const billingOpts = document.querySelectorAll('.billing-opt');
  const prices = document.querySelectorAll('.price');

  billingOpts.forEach((btn) => {
    btn.addEventListener('click', () => {
      billingOpts.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.opt;
      prices.forEach(p => {
        p.textContent = mode === 'yearly' ? p.dataset.yearly : p.dataset.monthly;
      });
    });
  });

  /* -------- Testimonials prev / next (manual) -------- */
  const track = document.getElementById('testiTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track && prevBtn && nextBtn) {
    let manualOffset = 0;
    const STEP = 400;

    const setManualTransform = () => {
      track.style.animation = 'none';
      track.style.transform = `translateX(${manualOffset}px)`;
    };

    prevBtn.addEventListener('click', () => {
      manualOffset = Math.min(manualOffset + STEP, 0);
      setManualTransform();
    });
    nextBtn.addEventListener('click', () => {
      const trackWidth = track.scrollWidth / 2;
      manualOffset = Math.max(manualOffset - STEP, -trackWidth);
      setManualTransform();
    });
  }

  /* -------- Header subtle shadow on scroll -------- */
  const navWrap = document.querySelector('.nav-wrap .nav');
  window.addEventListener('scroll', () => {
    if (!navWrap) return;
    if (window.scrollY > 24) {
      navWrap.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
    } else {
      navWrap.style.boxShadow = '0 6px 24px rgba(0,0,0,0.08)';
    }
  });

  /* -------- Reveal on scroll -------- */
  const revealEls = document.querySelectorAll(
    '.feature-card, .step-card, .price-card, .testi-card, .info-row, .cta-card, .section-head'
  );
  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));

  /* -------- Subscribe form (demo only) -------- */
  const form = document.querySelector('.cta-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && input.value.trim()) {
        const btn = form.querySelector('button');
        const original = btn.textContent;
        btn.textContent = '✓ Subscribed';
        input.value = '';
        setTimeout(() => { btn.textContent = original; }, 1800);
      }
    });
  }

});
