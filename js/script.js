document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Thanks for your interest! You can reach me at: contact@example.com');
        });
    }

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (hamburger && nav.style.display === 'flex') {
                nav.style.display = 'none';
            }
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0, 255, 255, 0.15)';
        }
    });

    const projectCards = document.querySelectorAll('.project-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Project link would navigate to the full project page');
        });
    });
});
