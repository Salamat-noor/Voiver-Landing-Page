let main1heading1st = document.getElementById("main1heading1st");
gsap.to(main1heading1st, {
    duration: 3,
    scrambleText: {
        text: "THIS IS NEW TEXT",
        chars: "XO",
        revealDelay: 0.5,
        speed: 0.3,
        newClass: "myClass"
    }
});