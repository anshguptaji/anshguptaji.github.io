/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});



/* Close menu after clicking */

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================
   SCROLL PROGRESS
========================= */

const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        percentage + "%";

});



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================
   PROJECT DESCRIPTION MODAL
========================= */

const projectModal = document.getElementById("projectModal");
const projectModalBackdrop = document.getElementById("projectModalBackdrop");
const projectModalClose = document.getElementById("projectModalClose");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");

const descButtons = document.querySelectorAll(".project-desc-btn");

function openProjectModal(btn) {

    modalCategory.textContent = btn.dataset.category || "";
    modalTitle.textContent = btn.dataset.title || "";
    modalDesc.textContent = btn.dataset.desc || "";

    modalTags.innerHTML = "";
    const tags = (btn.dataset.tags || "")
        .split(",")
        .map(t => t.trim())
        .filter(Boolean);

    tags.forEach(tag => {
        const span = document.createElement("span");
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    modalLink.href = btn.dataset.link || "#";
    modalLink.textContent = btn.dataset.linkLabel || "View Project ↗";

    projectModal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {

    projectModal.classList.remove("open");
    document.body.style.overflow = "";
}

descButtons.forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn));
});

if (projectModalBackdrop) {
    projectModalBackdrop.addEventListener("click", closeProjectModal);
}

if (projectModalClose) {
    projectModalClose.addEventListener("click", closeProjectModal);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
});



/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();