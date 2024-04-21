const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // adds the menu (hamburger) icon 
        toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars'></i>";
    } else {
        menu.classList.add("active");
        
        // adds the close (x) icon 
        toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/*  Slideshow java script */