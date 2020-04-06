// var carousel = document.getElementsByClassName("desc-4");

// carousel.addEventListener("click", function () { carousel.style.background = "green" });

// // function changeImage(){}

// // changeImage.addEventListener("click", function () {
// //     document.getElementsByClassName('carousel-img').src = './images/carousel images/nets', true

// })

document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    // var rightButton = document.getElementById("right-button");
    var carouselImages = document.getElementById("carousel-img");

    leftButton.addEventListener('click', function () { carouselImages.src = './images/carousel_images/govball.jpg' });
});