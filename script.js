document.addEventListener('DOMContentLoaded', function () {
    // WHERE THE IMG IS LOCATED ON THE PAGE //
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
    var rightButton = document.getElementById("right-button");
    function rightButtonControl() {
        rightButton.addEventListener('click', function () {
            carouselImages.setAttribute("src", imgArray[imgIndex + 1]);
            imgIndex++;
            // STOP ONCE IT GETS TO THE END OF THE ARRAY PICS
            if (imgIndex >= 3) { imgIndex = 2; };
        });
    }


    // USE OF THE L BUTTON TO REVERT TO PREVIOUS IMAGE //
    var leftButton = document.getElementById("left-button");
    function leftButtonControl() {
        leftButton.addEventListener("click", function () {
            carouselImages.setAttribute("src", imgArray[imgIndex--]);
            // STOP ONCE IT GETS TO THE END OF THE ARRAY PICS
            if (imgIndex < 0) { imgIndex = 0; };
        });
    };

    // USE OF LEFT KEY TO REVERT TO PREVIOUS IMAGE //
    document.onkeydown = function () {
        var x = event.keyCode;
        if (x == 37) {
            // ALERT FOR TESTING THIS WORKS
            alert("hello");
        }
    }


    // AUTOPLAY CAROUSEL //
    var imgDuration = setInterval(autoPlay, 4000);
    function autoPlay() {
        carouselImages.setAttribute("src", imgArray[imgIndex]);
        carouselImages[imgIndex] = 'img';
        imgIndex = (imgIndex + 1) % imgArray.length;
        carouselImages[imgIndex] = 'img showing';
    };


    // PLAY & PAUSE BUTTON //
    var playing = true;
    var playPauseButton = document.getElementById("pp-button");

    // TOP STOP IMG CHANGE //
    function pause() {
        playing = false;
        clearInterval(imgDuration);
    };

    // TO RESTART IMG CHANGE // 
    function play() {
        playing = true;
        imgDuration = setInterval(autoPlay, 4000);
    };

    // ON CLICK: PLAY OR PAUSE THE IMAGES
    playPauseButton.addEventListener('click', function () {
        if (playing) {
            pause();
        } else {
            play();
        };
    });
});
