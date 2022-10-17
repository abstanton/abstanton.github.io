//document.body.style.zoom = "100%"

var cv_button = document.getElementById('expand-button');
var expand_arrow = document.getElementById('expand-arrow')
var cv = document.getElementById("cv-section");

cv_button.addEventListener("click", () => {
    expand_arrow.classList.toggle("expand-arrow-active");
    cv.classList.toggle("cv-section-active");
})

var theme_toggle = document.querySelector("#theme-toggle")
theme_toggle.addEventListener('change', () => { document.body.classList.toggle("dark_mode") })