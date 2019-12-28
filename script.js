//NAV
//burger sliding
const burger = document.querySelector(".burger");

const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    nav.classList.toggle("active");
});


//TEAM

//Parametry
let activeElement = 0;
const timeChange = 4000;
// Pobieramy 4 elementy na których pracujemy
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h3');
const h2Html = document.querySelector('.member h4');

const colorImages = ['Images/s1.png', 'Images/s2.png', 'Images/s3.png'];
const grayImages = ['Images/s1a.png', 'Images/s2a.png', 'Images/s3a.png'];
const names = ['Natalie Baugart', 'Matthew Smith', 'Alex Dupoint'];
const professions = ['Web designer', 'UX and UI Designer', 'Graphic designer'];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];

}

setInterval(changeElement, timeChange)