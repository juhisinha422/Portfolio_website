document.addEventListener("DOMContentLoaded", () => {

  // ── Contact Form ──────────────────────────────────────────
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.style.color = "#e05c5c";
        return;
      }

      responseMessage.textContent = "✓ Thank you! Your message has been received.";
      responseMessage.style.color = "#4caf8a";
      form.reset();
    });
  }

  // ── Smooth active nav highlight on scroll ─────────────────
  const sections = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute("href") === `#${entry.target.id}`
            ? "var(--accent)"
            : "";
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // ── Fade-in sections on scroll ────────────────────────────
  const cards = document.querySelectorAll(".section, .project-card, .timeline-item");

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(24px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    fadeObserver.observe(card);
  });

});
