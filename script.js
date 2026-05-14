let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

/* Active section while scrolling */
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link=>{
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(
                'header nav a[href*=' + id + ']'
            );

            if(activeLink){
                activeLink.classList.add('active');
            }
        }
    });

    /* close menu on scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    /* sticky navbar */
    header.classList.toggle(
        'sticky',
        window.scrollY > 100
    );
};

/* Mobile menu */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Close menu after clicking */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/* Scroll animation */
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden')
.forEach(el=>observer.observe(el));
