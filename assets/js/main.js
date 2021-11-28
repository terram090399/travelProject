/* show menu  */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// menu show

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//menu hidden 

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove  menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {

    const navMenu = document.getElementById('nav-menu')
    // click on each nav__click, remove  the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* background header */

function scrollHeader(){
    const header = document.getElementById('header')
    // the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


/* swiper discovery */

var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
});
/* video js */

const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

// play and pause video

videoButton.addEventListener('click', function playPause(){
    if (videoFile.paused){
        //play video

        videoFile.play()

        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }else {
        //pause video
        videoFile.pause()

        //change icon 

        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
})

//the end video
videoFile.addEventListener('ended', function(){
         videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
})

