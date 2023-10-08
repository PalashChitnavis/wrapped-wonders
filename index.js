let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')
let navopen = document.querySelector('.navbar.active')
menu.addEventListener('click' , () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}
