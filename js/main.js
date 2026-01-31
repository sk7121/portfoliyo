/* =========================
   JOB TITLE ROTATION
========================= */
const el = document.getElementById("job");
const roles = ["Web Developer", "MERN Stack Developer", "Full Stack Developer"];
let roleIndex = 0;

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function changeRole() {
    el.textContent = roles[roleIndex];
    el.style.color = randomColor();
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeRole, 3000);

/* =========================
   SKILL BAR ANIMATION
========================= */
const skillBars = document.querySelectorAll(".skill-bar");
window.addEventListener("scroll", () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.querySelector(".skill-fill").style.width = bar.dataset.level;
        }
    });
});

/* =========================
   ACTIVE NAV LINK
========================= */
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

/* =========================
   DARK MODE TOGGLE
========================= */
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

