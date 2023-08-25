/*==================== SHOW MENU ========================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

/*==================== MENU SHOW ========================*/

//if içinde yazmamızın sebebi navToggle öğesi yoksa hata vermeden durdurmak için
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

/*==================== MENU HIDDEN ========================*/
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ========================*/
//menü açıkken menüden herhangi bir sayfaya tıklandığında menünün kapatılması

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ========================*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg')
                       : header.classList.remove('header-bg')
}

window.addEventListener('scroll', scrollHeader)