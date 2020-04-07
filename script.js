document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    // var rightButton = document.getElementById("right-button");
    var carouselImages = document.getElementById("carousel-img");

    var imgArray = [
        "./images/carousel_images/empirestate.jpg",
        "./images/carousel_images/govball.jpg",
        "./images/carousel_images/nets.jpg",
        "./images/carousel_images/vessel.jpg"
    ];
    var imgIndex = 1;

    leftButton.addEventListener('click', function () {
        carouselImages.setAttribute("src", imgArray[imgIndex]);
        imgIndex++;
        if (imgIndex > 3) { imgIndex = 0; };
    });
});