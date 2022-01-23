//vaiabel
const nav = document.getElementById('nav');

//event
window.addEventListener('scroll',function () {
    scrollposition = window.scrollY;
    //kondisi >60 scrollnya
    if(scrollposition>=60){
        nav.classList.add('nav-dark');
    } else if (scrollposition<=60) {
        nav.classList.remove('nav-dark');
    }
})