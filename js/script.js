/*ACTIVAR SECCIÓN SEGÚN EL SCROLL*/

let secciones = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        }
    })

/*ACTIVAR UN FILAMENTO INFERIOR AL MENÚ AL HACER SCROLL*/

    let cabecera = document.querySelector('header');

    cabecera.classList.toggle('sticky', window.scrollY > 100);

/*QUE EL MENÚ SE AUTOREPLIEGUE AL HACER SCROLL*/

    iconoMenu.classList.remove('bx-x');
    navbar.classList.remove('active');

}

/*CAMBIAR EL ICONO DEL MENÚ DE NAVEGACIÓN*/

let iconoMenu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*EFECTOS DE SCROLL*/

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.inicio-contenido, .cabecera', {origin: 'top'});
ScrollReveal().reveal('.contenedor-servicios, .imag-inicio, .caja-portafolio, .contacto form', {origin: 'bottom'});
ScrollReveal().reveal('.inicio-contenido h1, .sobre-mi-imagen', {origin: 'left'});
ScrollReveal().reveal('.inicio-contenido p, .contenido-sobre-mi', {origin: 'right'});


/*CAMBIAR EL TÍTULO DE PROFESIÓN AUTOMÁTICAMENTE*/

const typed = new Typed('.multiple-text', {
    strings: ['Psicología organizacional', 'Docencia', 'Analítica de datos', 'Visualización de datos', 'Programación'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})