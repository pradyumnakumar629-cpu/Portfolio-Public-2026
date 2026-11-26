// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Mobile menu ----------
const navLinks = document.getElementById("nav-links");
document.getElementById("menu-toggle").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll("section[id]");
const links = navLinks.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});

// ---------- Scroll reveal + skill bars ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.querySelectorAll(".fill").forEach((bar) => {
        bar.style.width = bar.dataset.width + "%";
      });
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Back to top button ----------
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 400 ? "block" : "none";
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Contact form (opens the visitor's email app) ----------
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
  // Replace with your real email
  window.location.href = "mailto:your-email@example.com?subject=" + subject + "&body=" + body;
});