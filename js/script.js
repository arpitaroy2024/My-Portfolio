// scripts.js

// ========== Smooth Scroll for Anchor Navigation ==========
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            e.preventDefault();
            const section = document.querySelector(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ========== Animate profile image on page load ==========
window.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('#home img');
    if(profileImg) {
        profileImg.style.opacity = '0';
        profileImg.style.transform = 'scale(0.8)';
        setTimeout(() => {
            profileImg.style.transition = 'all 0.8s cubic-bezier(.48,-0.33,.57,1.48)';
            profileImg.style.opacity = '1';
            profileImg.style.transform = 'scale(1)';
        }, 200);
    }
});

// ========== Bootstrap ScrollSpy activation ==========
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 80
});

// ========== Contact Form Validation (example only) ==========
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', function (e) {
            let valid = true;
            form.querySelectorAll('input, textarea').forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    valid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            if (!valid) {
                e.preventDefault();
            }
        });
    }
});
