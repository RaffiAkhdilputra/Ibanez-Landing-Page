// Navbar
const desktopNavbar = document.querySelector("#desktop-navbar");
const tabletNavbar = document.querySelector("#tablet-navbar");
const mobileNavbar = document.querySelector("#mobile-navbar");

// For Mobile
const navbarBurger = document.querySelector(".burger");
const navigation = document.querySelector(".mobile-menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        desktopNavbar.classList.add("scrolled");
        tabletNavbar.classList.add("scrolled");
        mobileNavbar.classList.add("scrolled");
    } else if ((window.scrollY === 0) && !(navigation.innerHTML && navigation.innerHTML.trim() !== "")) {
        desktopNavbar.classList.remove("scrolled");
        tabletNavbar.classList.remove("scrolled");
        mobileNavbar.classList.remove("scrolled");
    }
});

navbarBurger.addEventListener("click", () => {
    if (!mobileNavbar.classList.contains("scrolled")) {
        mobileNavbar.classList.add("scrolled");
    } else if ((mobileNavbar.classList.contains("scrolled")) && (window.scrollY === 0)) {
        mobileNavbar.classList.remove("scrolled");
    }

    if (navigation.innerHTML && navigation.innerHTML.trim() !== "") {
        navigation.innerHTML = "";
    } else {
        navigation.innerHTML = `
            <a class="navbar-item burger" href="">Electric Guitars</a>
            <a class="navbar-item burger" href="">Basses</a>
            <a class="navbar-item burger" href="">Hollow Bodies</a>
            <a class="navbar-item burger" href="">Electronics</a>
            <a class="navbar-item burger" href="">Accessories</a>
        `;
    }
    
});

// Zoom
const zoomImgBox = document.querySelector(".zoom-img");
const zoomImg = document.querySelector(".zoom-img img");

zoomImgBox.setAttribute("data-text", "Black Rutile")

let posX = 0, posY = 0;

function mousePosition(event) {
    posX = event.clientX;
    posY = event.clientY;
}

if (zoomImg) {
    zoomImg.addEventListener("mousemove", (event) => {
        posX = event.clientX;
        posY = event.clientY;
        let zoom = 2;
        zoomImg.style.transform = `scale(${zoom})`;
        zoomImg.style.transformOrigin = `${posX-250}px ${posY-130}px`;

        console.log(posX, posY);
    });
}

zoomImg.addEventListener("mouseleave", () => {
    zoomImg.style.transform = "scale(1)";
    zoomImg.style.transformOrigin = "center center";
    console.log("mouseleave");
});

// Color Variation
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const color3 = document.querySelector(".color-3");

let colorImg = document.querySelector(".main-image");

color1.addEventListener("click", () => {
    color1.classList.add("is-active-color");
    color2.classList.remove("is-active-color");
    color3.classList.remove("is-active-color");

    zoomImgBox.setAttribute("data-text", "Black Rutile")
    colorImg.src = "images/p_region_RG8870_BRE_00_01.png";
});
color2.addEventListener("click", () => {
    color1.classList.remove("is-active-color");
    color2.classList.add("is-active-color");
    color3.classList.remove("is-active-color");
    
    zoomImgBox.setAttribute("data-text", "Sodalite")
    colorImg.src = "images/p_region_RG8870_SDE_00_01.png";
});
color3.addEventListener("click", () => {
    color1.classList.remove("is-active-color");
    color2.classList.remove("is-active-color");
    color3.classList.add("is-active-color");
    
    zoomImgBox.setAttribute("data-text", "Brownish Sphalerite")
    colorImg.src = "images/p_region_RG8870_BSR_00_01.png";
});

// Responsive
const windowWidth = window.innerWidth;
const mainContentBtn = document.querySelector(".content .button");
const artistLevel = document.querySelector(".artist-level");

if (windowWidth > 1024) {
    desktopNavbar.classList.remove("is-hidden");
    tabletNavbar.classList.add("is-hidden");
    mobileNavbar.classList.add("is-hidden");
}

if (windowWidth < 1024) {
    desktopNavbar.classList.add("is-hidden");
    tabletNavbar.classList.remove("is-hidden");
    mobileNavbar.classList.add("is-hidden");
} 

if (windowWidth < 768) {
    artistLevel.classList.add("my-6", "is-display-flex", "is-justify-content-space-around");
}

if (windowWidth < 530) { 
    tabletNavbar.classList.add("is-hidden");
    desktopNavbar.classList.add("is-hidden");
    mobileNavbar.classList.remove("is-hidden");
    
    mainContentBtn.innerHTML = "Get Your Own!";
}


if (windowWidth < 450) {
}
