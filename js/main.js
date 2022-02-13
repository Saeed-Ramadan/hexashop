//slider for men

//variables
let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125;
});
buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 200;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


//end slider

//slider for women

//variables
let thumbnail_women = document.getElementsByClassName("thum-women");
let slider_women = document.getElementById("slider_women");
let buttonRight2 = document.getElementById("slide-right1");
let buttonLeft2 = document.getElementById("slide-left1");

buttonLeft2.addEventListener("click", () => {
    slider_women.scrollLeft -= 125;
});
buttonRight2.addEventListener("click", () => {
    slider_women.scrollLeft += 200;
});

const maxScrollLeft1 = slider_women.scrollWidth - slider_women.clientWidth;


//end slider

//slider for kid

//variables
let thumbnail_kid = document.getElementsByClassName("thum-kid");
let slider_kid = document.getElementById("slider_kid");
let buttonRight3 = document.getElementById("slide-right2");
let buttonLeft3 = document.getElementById("slide-left2");

buttonLeft3.addEventListener("click", () => {
    slider_kid.scrollLeft -= 125;
});
buttonRight3.addEventListener("click", () => {
    slider_kid.scrollLeft += 200;
});

const maxScrollLeft2 = slider_kid.scrollWidth - slider_kid.clientWidth;

//end slider


//toggle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    //stop propagation
    e.stopPropagation();

    //toggle class "menu-active" on button
    this.classList.toggle("menu-active");

    //toggle class "open" on links
    tLinks.classList.toggle("open");
};

//click anywhere outside menu and toggle button
document.addEventListener("click" , (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

         //check if menu is open
        if (tLinks.classList.contains("open")){

            //toggle class "menu-active" on button
            toggleBtn.classList.toggle("menu-active");

            //toggle class "open" on links
            tLinks.classList.toggle("open");
        }
    }

});

//stop propagation on menu
tLinks.onclick = function (e) {
    e.stopPropagation();
}