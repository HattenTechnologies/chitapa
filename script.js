document.addEventListener('DOMContentLoaded', () => {
    // Video Load Handling
    const heroVideo = document.querySelector('.hero-video');
    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.style.opacity = '1';
    });

    // Hamburger Menu
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Contact Form
    const contactForm = document.querySelector('#contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        emailjs.send('service_xl6w2jd', 'template_9k3v8le', data)
            .then(() => {
                alert('Message sent successfully!');
                contactForm.reset();
            })
            .catch(() => {
                alert('Failed to send message. Please try again.');
            });
    });

    // GSAP Animations
    gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    gsap.from('.hero-buttons .btn', { opacity: 0, y: 20, duration: 0.8, stagger: 0.2, delay: 1 });
});
