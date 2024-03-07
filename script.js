// script.js
const imageContainers = document.querySelectorAll('.album');
const divImageFocus = document.querySelector('.imagefocus');
const pictureAndDescriptionFocus = document.querySelector('#pictureAndDescriptionFocus');
const body = document.querySelector('body');
var imageRef = "";
var imageFocus = "";
var photoDescriptionFocus = "";
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');


imageContainers.forEach((element) => {
    element.addEventListener('click', (event) => {
        imageRef = event.target
        imageFocus = imageRef.cloneNode();
        console.log(imageRef.nextElementSibling)
        photoDescriptionFocus = imageRef.nextElementSibling.cloneNode(true);
        document.querySelector('nav').style.filter = 'blur(5px)';
        document.querySelector('footer').style.filter = 'blur(5px)';
        document.querySelector('#astrophotosSection').style.filter = 'blur(5px)';
        document.querySelector('#socialNetworksSection').style.filter = 'blur(5px)';
        imageFocus.style.width = '50%';
        imageFocus.style.margin = 'auto';
        imageFocus.style.margin = '5% auto auto auto';
        imageFocus.style.padding = '1%';
        imageFocus.style.backgroundColor = '#717171';
        photoDescriptionFocus.style.display = 'block';
        pictureAndDescriptionFocus.appendChild(imageFocus);
        pictureAndDescriptionFocus.appendChild(photoDescriptionFocus);
        divImageFocus.style.display = "inline-flex";
        body.style.backgroundColor = ' rgba(0, 0, 0, 0.8)';

    });
});

document.addEventListener('click', (event) => {
    if (imageFocus != '') {
        if (!Array.from(imageContainers).some(container => container.contains(event.target)) && !rightArrow.contains(event.target) && !leftArrow.contains(event.target)) {
            console.log(37)
            body.style.backgroundColor = 'transparent';
            divImageFocus.style.display = "none";
            pictureAndDescriptionFocus.removeChild(imageFocus);
            pictureAndDescriptionFocus.removeChild(photoDescriptionFocus);
            document.querySelector('nav').style.filter = 'blur(0)';
            document.querySelector('footer').style.filter = 'blur(0)';
            document.querySelector('#astrophotosSection').style.filter = 'blur(0)';
            document.querySelector('#socialNetworksSection').style.filter = 'blur(0)';
            imageFocus = '';
        } 
    }

});

rightArrow.addEventListener('click', (event) => {
    console.log(54)
    var indice = Array.from(imageContainers).indexOf(imageRef)
    var imageContainersLength = imageContainers.length

    if (indice + 1 == imageContainersLength) {
        imageRef = imageContainers[0]
    } else {
        imageRef = imageContainers[indice + 1]
    }
    var newPhotoDescriptionFocus = imageRef.nextElementSibling.cloneNode(true);
    newPhotoDescriptionFocus.style.display = 'block';
    console.log(newPhotoDescriptionFocus)
    var newimageFocus = imageRef.cloneNode();
    newimageFocus.style.width = '50%';
    newimageFocus.style.margin = 'auto';
    newimageFocus.style.margin = '5% auto auto auto';
    newimageFocus.style.padding = '1%';
    newimageFocus.style.backgroundColor = '#717171';

    pictureAndDescriptionFocus.replaceChild(newimageFocus, imageFocus);
    pictureAndDescriptionFocus.replaceChild(newPhotoDescriptionFocus, photoDescriptionFocus);
    // pictureAndDescriptionFocus.appendChild(newPhotoDescriptionFocus);
    imageFocus = newimageFocus
    photoDescriptionFocus = newPhotoDescriptionFocus


});

leftArrow.addEventListener('click', (event) => {
    var indice = Array.from(imageContainers).indexOf(imageRef)
    var imageContainersLength = imageContainers.length

    if (indice - 1  == -1) {
        imageRef = imageContainers[imageContainersLength-1]
    } else {
        imageRef = imageContainers[indice -1]
    }
    var newPhotoDescriptionFocus = imageRef.nextElementSibling.cloneNode(true);
    newPhotoDescriptionFocus.style.display = 'block';
    var newimageFocus = imageRef.cloneNode();
    newimageFocus.style.width = '50%';
    newimageFocus.style.margin = 'auto';
    newimageFocus.style.margin = '5% auto auto auto';
    newimageFocus.style.padding = '1%';
    newimageFocus.style.backgroundColor = '#717171';
    pictureAndDescriptionFocus.replaceChild(newimageFocus, imageFocus);
    pictureAndDescriptionFocus.replaceChild(newPhotoDescriptionFocus, photoDescriptionFocus);
    imageFocus = newimageFocus
    photoDescriptionFocus = newPhotoDescriptionFocus
});
