document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const heroSection = document.getElementById("hero-section");
    const button = document.querySelector(".navbtn");

    const changeColor = () => {
        const heroHeight = heroSection.offsetHeight; 
        if (window.scrollY > heroHeight) {
            header.style.backgroundColor = "#fff";
            header.style.color = "#000";
            button.style.backgroundColor = "#28a745"; 
            button.style.color = "#fff"; 
        } else {
            header.style.backgroundColor = "#ffc017"; 
            header.style.color = "black";
            button.style.backgroundColor = "black"; 
            button.style.color = "white"; 
        }
    };

    window.addEventListener("scroll", changeColor);
});

