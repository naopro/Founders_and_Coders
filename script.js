document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");
    // var playPauseButton = document.getElementsById("pp-button");
    var carouselImages = document.getElementById("carousel-img");

    // IMAGES TO SHOW IN THE CAROUSEL //
    var imgArray = [
        "./images/carousel_images/empirestate.jpg",
        "./images/carousel_images/govball.jpg",
        "./images/carousel_images/nets.jpg",
        "./images/carousel_images/vessel.jpg"
    ];

    // STARTING IMG //
    var imgIndex = 0;

    // USE OF THE R BUTTON TO PROCEED TO NEXT IMAGE //
    function rightButtonControl() {
        rightButton.addEventListener('click', function () {
            carouselImages.setAttribute("src", imgArray[imgIndex + 1]);
            imgIndex++;
            // STOP ONCE IT GETS TO THE END OF THE ARRAY PICS
            if (imgIndex >= 3) { imgIndex = 2; };
        });
    }
    rightButtonControl()

    // USE OF THE L BUTTON TO REVERT TO PREVIOUS IMAGE //
    function leftButtonControl() {
        leftButton.addEventListener('click', function () {
            carouselImages.setAttribute("src", imgArray[imgIndex--]);
            // STOP ONCE IT GETS TO THE END OF THE ARRAY PICS
            if (imgIndex < 0) { imgIndex = 0; };
        });
    }
    leftButtonControl();

    // AUTOPLAY CAROUSEL //
    var imgTime = setInterval(autoPlay, 4000);
    function autoPlay() {
        carouselImages.setAttribute("src", imgArray[imgIndex]);
        carouselImages[imgIndex] = 'img';
        imgIndex = (imgIndex + 1) % imgArray.length;
        carouselImages[imgIndex] = 'img showing';
    };
    autoPlay();

    // playPauseButton.addEventListener('click', function () {
});












    // USE OF KEYBOARD PRESS TO CHANGE IMAGES //

    // [ArrowLeft]
    // to do: assign the carousel div to a var, isolate the required key press, (if) that keypress, set the src to iterate through the array

    // var theCarousel = document.getElementById("carousel");
    // theCarousel.addEventListener('keydown', function (press) {
    //     if (press.key == 'ArrowRight') { carouselImages.setAttribute("src", imgArray[imgIndex]); }
    // }


    // [ArrowRight]