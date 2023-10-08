let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click' , () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}