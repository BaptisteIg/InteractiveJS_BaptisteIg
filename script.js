// Fonctionalité 1 :

let footer = document.getElementsByTagName("footer")[0];
let counter = 0

let onFooterClick = function () {
    counter += 1
    console.log(`clique n° ${counter}`);
};

footer.addEventListener("click", onFooterClick);

// Fonctionalité 2 :

let hamburgermenu = document.getElementsByClassName("navbar-toggler")[0];
let navbarHeader = document.getElementById("navbarHeader");

let onHamburgerMenuClick = function () {
    navbarHeader.classList.toggle("collapse");
};

hamburgermenu.addEventListener("click", onHamburgerMenuClick)

// Fonctionalité 3 :

let buttonEditFirst = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let cardTextFirst = document.getElementsByClassName("card-text")[0];

let cardTextFirstRed = function () {
    cardTextFirst.style.color = "red";
};

buttonEditFirst.addEventListener("click", cardTextFirstRed);

// Fonctionalité 4 :

let buttonEditSecond = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let cardTextSecond = document.getElementsByClassName("card-text")[1];

let cardTextSecondGreen = function () {
    if (cardTextSecond.style.color === "green") {
        cardTextSecond.style.color = "black";   
    } else {
        cardTextSecond.style.color = "green";  
    }
};

buttonEditSecond.addEventListener("click", cardTextSecondGreen);

// Fonctionalité 5 :

let navbar = document.getElementsByTagName('header')[0];
let bootstrap = document.getElementsByTagName('link')[0];
navbar.addEventListener('dblclick', function() {
  if (bootstrap.getAttribute('href') !== null) {
    bootstrap.removeAttribute('href');
  } else {
    bootstrap.setAttribute('href', "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  }
});

// Fonctionalité 6 :

let view = document.querySelectorAll('.btn-success');
let text = document.querySelectorAll('.card-text');
let img =  document.querySelectorAll('.card-img-top');
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseover', function() {
    if (text[i].style.display !== "none") {
      img[i].style.width = "20%";
      text[i].style.display = "none";
    } else {
      img[i].style.width = "100%";
      text[i].style.display = "";
    }
  });
}

// Fonctionalité 7 :

let arrowRight = document.querySelector('section .btn-secondary');
let lastCard = document.querySelector('main div .container .row');


let lastRFirst = function () {
    lastCard.insertBefore(lastCard.lastChild, lastCard.childNodes[0])
}

arrowRight.addEventListener("click", lastRFirst)

// Fonctionalité 8 :

// Fonctionalité 9 :

