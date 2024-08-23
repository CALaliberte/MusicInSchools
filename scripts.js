function updateNavbarActiveState() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav .nav-underline');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.id;
            console.log('currentSectionId:', currentSectionId)
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
            console.log('Active Link:', link)
        }
    });
}

window.addEventListener('scroll', updateNavbarActiveState);

document.addEventListener('DOMContentLoaded', updateNavbarActiveState);
