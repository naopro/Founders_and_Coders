document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");
    var carouselImages = document.getElementById("carousel-img");

    leftButton.addEventListener('click', function () { carouselImages.src = imgArray[0] });

    var imgArray = [
        "./images/carousel_images/govball.jpg",
        "./images/carousel_images/empirestate.jpg",
        "./images/carousel_images/nets.jpg",
        "./images/carousel_images/vessel.jpg"
    ]


    rightButton.addEventListener('click', function () { carouselImages.src = imgArray[3]; });
});

var imgArray = [
    "./images/carousel_images/govball.jpg",
    "./images/carousel_images/empirestate.jpg",
    "./images/carousel_images/nets.jpg",
    "./images/carousel_images/vessel.jpg"
]