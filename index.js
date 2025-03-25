// Zoom
const zoomImg = document.querySelector(".zoom-img img");

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

    colorImg.src = "images/p_region_RG8870_BRE_00_01.png";
});
color2.addEventListener("click", () => {
    color1.classList.remove("is-active-color");
    color2.classList.add("is-active-color");
    color3.classList.remove("is-active-color");
    
    colorImg.src = "images/p_region_RG8870_SDE_00_01.png";
});
color3.addEventListener("click", () => {
    color1.classList.remove("is-active-color");
    color2.classList.remove("is-active-color");
    color3.classList.add("is-active-color");
    
    colorImg.src = "images/p_region_RG8870_BSR_00_01.png";
});

