// navbar
let navbar_button = document.querySelector('.navbar-button');
let navLinks = document.querySelector('.nav-links');

navbar_button.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

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