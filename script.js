document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    // var rightButton = document.getElementById("right-button");
    var carouselImages = document.getElementById("carousel-img");

    leftButton.addEventListener('click', function () { carouselImages.src = './images/carousel_images/govball.jpg' });
});