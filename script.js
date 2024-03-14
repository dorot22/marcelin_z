// script.js
const imageContainers = document.querySelectorAll('.album');
const divImageFocus = document.querySelector('.imagefocus');
const pictureAndDescriptionFocus = document.querySelector('#pictureAndDescriptionFocus');
const body = document.querySelector('body');
var imageRef = "";
var imageFocus = "";
var photoDescriptionFocus = "";
const rightArrowImageFocus = document.querySelector('#right-arrow-imageFocus');
const leftArrowImageFocus = document.querySelector('#left-arrow-imageFocus');
var isFocus = false;
const navbarH1 = document.querySelector('nav a h1');
const lastPublications = document.querySelectorAll('.socialNetworkPublication');
const leftArrowLastPublicationsArea = document.querySelector('#left-arrow-lastPublicationsArea');
const rightArrowLastPublicationsArea = document.querySelector('#right-arrow-lastPublicationsArea');
var publicationFocus = lastPublications[0];
publicationFocus.style.display='block';

imageContainers.forEach((element) => {
    element.addEventListener('click', (event) => {
        isFocus = true
        imageRef = event.target
        imageFocus = imageRef.cloneNode();
        photoDescriptionFocus = imageRef.nextElementSibling.cloneNode(true);
        document.querySelector('nav').style.filter = 'blur(5px)';
        document.querySelector('footer').style.filter = 'blur(5px)';
        document.querySelector('#astrophotosSection').style.filter = 'blur(5px)';
        document.querySelector('#socialNetworksSection').style.filter = 'blur(5px)';
        imageFocus.style.filter = 'none';
        imageFocus.style.width = '50%';
        imageFocus.style.margin = '2% auto auto auto';
        imageFocus.style.height = 'auto';
        imageFocus.style.padding = '1%';
        imageFocus.style.backgroundColor = '#717171';
        photoDescriptionFocus.style.display = 'block';
        pictureAndDescriptionFocus.appendChild(imageFocus);
        pictureAndDescriptionFocus.appendChild(photoDescriptionFocus);
        divImageFocus.style.display = "inline-flex";
        imageFocus.style.clipPath = 'none';
        body.style.backgroundColor = ' rgba(0, 0, 0, 0.8)';

    });
});

document.addEventListener('click', (event) => {
    if (imageFocus != '') {
        if (!Array.from(imageContainers).some(container => container.contains(event.target)) && !rightArrowImageFocus.contains(event.target) && !leftArrowImageFocus.contains(event.target)) {
            isFocus = false;
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

rightArrowImageFocus.addEventListener('click', (event) => {
    scrollPhoto('right')
});

leftArrowImageFocus.addEventListener('click', (event) => {
    scrollPhoto('left')
});


document.addEventListener("keydown", function (event) {
    if (focus) {
        if (event.key === "ArrowRight") {
            scrollPhoto('right')
        }
        if (event.key === "ArrowLeft") {
            scrollPhoto('left')
        };
    }

});

function scrollPhoto(direction) {
    var indice = Array.from(imageContainers).indexOf(imageRef)
    var imageContainersLength = imageContainers.length
    if (direction == 'right') {
        if (indice + 1 == imageContainersLength) {
            imageRef = imageContainers[0]
        } else {
            imageRef = imageContainers[indice + 1]
        }
    } else if (direction == 'left') {
        if (indice - 1 == -1) {
            imageRef = imageContainers[imageContainersLength - 1]
        } else {
            imageRef = imageContainers[indice - 1]
        }
    }
    var newPhotoDescriptionFocus = imageRef.nextElementSibling.cloneNode(true);
    newPhotoDescriptionFocus.style.display = 'block';
    var newimageFocus = imageRef.cloneNode();
    newimageFocus.style.width = '50%';
    newimageFocus.style.height = 'auto';
    newimageFocus.style.margin = '2% auto auto auto';
    newimageFocus.style.padding = '1%';
    newimageFocus.style.backgroundColor = '#717171';
    newimageFocus.style.display = 'block';
    newimageFocus.style.clipPath = 'none';
    pictureAndDescriptionFocus.replaceChild(newimageFocus, imageFocus);
    pictureAndDescriptionFocus.replaceChild(newPhotoDescriptionFocus, photoDescriptionFocus);
    imageFocus = newimageFocus
    photoDescriptionFocus = newPhotoDescriptionFocus

}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarH1.classList.add('navH1Scrolled');

    } else {
        navbarH1.classList.remove('navH1Scrolled');
    }
});


leftArrowLastPublicationsArea.addEventListener('click', (event) => {
    scrollPublication('left')
});

rightArrowLastPublicationsArea.addEventListener('click', (event) => {
    scrollPublication('right')
});

function scrollPublication(direction) {
    var indice = Array.from(lastPublications).indexOf(publicationFocus)
    publicationFocus.style.display='none';
    var lastPublicationsLength = lastPublications.length
    if (direction == 'right') {
        if (indice + 1 == lastPublicationsLength) {
            publicationFocus = lastPublications[0]
        } else {
            publicationFocus = lastPublications[indice + 1]
        }
    } else if (direction == 'left') {
        if (indice - 1 == -1) {
            publicationFocus = lastPublications[lastPublicationsLength - 1]
        } else {
            publicationFocus = lastPublications[indice - 1]
        }
    }
    publicationFocus.style.display='block';

}