let forMobileResponse = document.getElementById("trash");
let neeche = document.getElementById("forwardArrowresponsive");
let uper = document.getElementById("backwardArrowResponsive");
let nav = document.querySelector("nav");


forMobileResponse.addEventListener('click', () => {
    if (neeche.style.opacity === "1" && uper.style.opacity === "0") {
        neeche.style.opacity = "0";
        uper.style.opacity = "1";

        gsap.to(nav, {
            y: 0,
            duration: 1,
            ease: "power1.easeIn",
            opacity: 1
        });
    } else {
        uper.style.opacity = "0";
        neeche.style.opacity = "1";

        gsap.to(nav, {
            y: -100,
            duration: 1,
            ease: "power1.easeIn",
            opacity: 1
        });
    }
    //////////////////////////////////
});