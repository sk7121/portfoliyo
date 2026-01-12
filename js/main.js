const el = document.getElementById("job");
const h1s = document.querySelectorAll(".h1s");

const text = el.dataset.text || el.textContent; // safer
let i = 0;
let isDeleting = false;
let isPaused = false;

const speed = 100;
const pause = 600;
const cursor = "|";

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColors() {
    h1s.forEach(h1 => h1.style.color = randomColor());
}

function render() {
    el.textContent = text.slice(0, i) + cursor;
}

function typeLoop() {
    if (isPaused) {
        setTimeout(typeLoop, speed);
        return;
    }

    if (!isDeleting) {
        // typing
        i++;
        render();

        if (i === text.length) {
            isPaused = true;
            changeColors();
            setTimeout(() => {
                isDeleting = true;
                isPaused = false;
            }, pause);
        }
    } else {
        // deleting
        i--;
        render();

        if (i === 0) {
            isPaused = true;
            changeColors();
            setTimeout(() => {
                isDeleting = false;
                isPaused = false;
            }, pause);
        }
    }

    setTimeout(typeLoop, speed);
}

// init
el.textContent = cursor;
changeColors();
typeLoop();


const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (
                        link.getAttribute("href").substring(1) ===
                        entry.target.id
                    ) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.6
    }
);

sections.forEach(section => observer.observe(section));

