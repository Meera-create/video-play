// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded 
//and parsed, without waiting for stylesheets, images, and subframes to finish loading.


// The load event is fired when the whole page has loaded, including all dependent 
//resources such as stylesheets and images.

const button = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

//if button doesnt have slide class, then add it
button.addEventListener('click', function () {
    if (!button.classList.contains('slide')) {
        button.classList.add('slide')
        video.pause()
    } else {
        button.classList.remove('slide')
        video.play()
    }

})

//pre loader gif

const preLoader = document.querySelector('.preloader');


//using windows as global object, listen for the load event
window.addEventListener('load', function () {
    preLoader.classList.add('hide-preloader')
})


