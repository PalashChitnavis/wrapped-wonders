let view = document.querySelectorAll('.festive .box-container .box .info .btn1')
view.forEach((viewbtn) => {
    viewbtn.addEventListener('click', () => {
        let parent1 = viewbtn.parentNode ;
        let parent = parent1.parentNode;
        let imagecontainer = parent.querySelector('.box-desc')
        let closebtn = imagecontainer.querySelector('#close-btn')
        imagecontainer.classList.toggle('active');
        console.log('pressed')
        window.addEventListener('scroll', preventScroll, { passive: false });
        document.body.scroll = "no";
        closebtn.addEventListener('click' , () => {
            imagecontainer.classList.remove('active')
        })
    })
})
function preventScroll(event) {
    event.preventDefault();
  }
  


