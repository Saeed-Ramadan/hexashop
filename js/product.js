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