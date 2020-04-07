document.addEventListener('DOMContentLoaded', function () {
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");
    var carouselImages = document.getElementById("carousel-img");

    leftButton.addEventListener('click', function () { carouselImages.src = imgArray[0] });

    var imgArray = [];
    imgArray[0] = "./images/carousel_images/govball.jpg",
        imgArray[1] = "./images/carousel_images/empirestate.jpg",
        imgArray[2] = "./images/carousel_images/nets.jpg",
        imgArray[3] = "./images/carousel_images/vessel.jpg"



    var i = 0;
    function changepic(3);
    if (i < imgArray.length; i++)
carouselImages = (imgArray[i++]);
// rightButton.addEventListener('click', function () { carouselImages.src = imgArray[3]; });
rightButton.addEventListener('click', changepic());
});

// var imgArray = [
//     "./images/carousel_images/govball.jpg",
//     "./images/carousel_images/empirestate.jpg",
//     "./images/carousel_images/nets.jpg",
//     "./images/carousel_images/vessel.jpg"
// ]