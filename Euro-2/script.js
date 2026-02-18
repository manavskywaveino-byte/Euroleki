const scrollTopBtn = document.getElementById("scrollTop");
const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 40;
  scrollTopBtn.classList.toggle("show", window.scrollY > 300);
  mainNav.classList.toggle("shadow-sm", scrolled);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("a.nav-link[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    const navCollapse = document.querySelector(".navbar-collapse.show");
    if (navCollapse) {
      new bootstrap.Collapse(navCollapse).hide();
    }
  });
});

const revealTargets = document.querySelectorAll(
  ".section-title, .media-card, .video-wrap, .offer-card, .team-card, .doc-card, .quality-image, .card-glass"
);

revealTargets.forEach((el) => el.classList.add("reveal-up"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((el) => observer.observe(el));
