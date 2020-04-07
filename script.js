document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");
    var carouselImages = document.getElementById("carousel-img");

    var imgArray = [
        "./images/carousel_images/empirestate.jpg",
        "./images/carousel_images/govball.jpg",
        "./images/carousel_images/nets.jpg",
        "./images/carousel_images/vessel.jpg"
    ];

    // USE OF BUTTONS TO CHANGE IMAGES //

    // THE POSITION THAT THE FIRST CLICK GOES TO: //
    var imgIndex = 1;

    // RIGHT BUTTON ORDER: SRC, 1, 2, 3, 0 // AS DESIRED
    rightButton.addEventListener('click', function () {
        carouselImages.setAttribute("src", imgArray[imgIndex]);
        imgIndex++;
        if (imgIndex > 3) { imgIndex = 0; };
    });

    // THE POSITION THAT THE FIRST CLICK GOES TO: //
    var imgGloss = 3

    // LEFT BUTTON ORDER: SRC, 3, 2, 1, 0
    leftButton.addEventListener('click', function () {
        carouselImages.setAttribute("src", imgArray[imgGloss]);
        imgGloss--
        if (imgGloss < 0) { imgGloss = 3; };
    });
    // USE OF KEYBOARD PRESS TO CHANGE IMAGES //

    // [ArrowLeft]
    // to do: assign the carousel div to a var, isolate the required key press, (if) that keypress, set the src to iterate through the array

    var theCarousel = document.getElementById("carousel");
    theCarousel.addEventListener('keydown', function (press) {
        if (press.key == 'ArrowRight') { carouselImages.setAttribute("src", imgArray[imgIndex]); }
    }


    // [ArrowRight]



});