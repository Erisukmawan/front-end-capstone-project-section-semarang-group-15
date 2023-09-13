// navbar
let navbar_button = document.querySelector('.navbar-button');
let navLinks = document.querySelector('.nav-links');

navbar_button.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

//hero
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("hero-content");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// faq
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";


        } else {
            panel.style.display = "block";
        }
    });
}

// modaldaftar
var modal = document.getElementById("modalDaftar");
var btn = document.getElementById("buttonDaftar");
var span = document.getElementsByClassName("close")[0];

function btnDaftar() {
  console.log("muncul")
  modal.style.display = "block";
}
span.onclick = function () {
  
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
