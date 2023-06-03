const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // evitar o comportamento padrão do link
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' }); // rolar suavemente para a seção
    });
});