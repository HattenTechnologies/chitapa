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

    // Animated Counters
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const speed = 200;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
                if (counter.getAttribute('data-count') === '100') {
                    counter.innerText += '%';
                }
            }
        };
        updateCount();
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

    // Gallery Filter
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Project Filter
    const projectFilterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            projectFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Testimonials Carousel
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Contact Form
    const contactForm = document.querySelector('#contactForm');
    const successMessage = document.querySelector('#successMessage');
    const errorMessage = document.querySelector('#errorMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        emailjs.send('service_xl6w2jd', 'template_9k3v8le', data)
            .then(() => {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                contactForm.reset();
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch(() => {
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            });
    });
});
