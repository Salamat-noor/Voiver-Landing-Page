let header4 = document.getElementById("header4");
let hireBtn = document.querySelectorAll('#btn');
let moreResults = document.getElementById('more-Results');
let slider1 = document.getElementById('slider1');
let howItWorks = document.getElementById('howItWorks');
let howItWorksHeading = document.getElementById('howItWorksHeading');


gsap.from(hireBtn, {
    scrollTrigger: {
        trigger: hireBtn,
        toggleActions: "restart paused restart paused",
        start: "top center",
        end: "+=500",
        scrub: 1,
    },
    opacity: .5,
    scale: 1 - .5,
    duration: 1,
    delay: .5,
    stagger: 1,
})

gsap.from(moreResults, {
    scrollTrigger: {
        trigger: slider1,
        toggleActions: "restart paused restart paused",
        start: "top bottom",
        end: "+=150",
        scrub: 1,
    },
    opacity: 0,
    yoyo: true,
    duration: 1,
    scale: 0,
    ease: "power1.inOut",
});

gsap.from(howItWorksHeading, {
    scrollTrigger: {
        trigger: howItWorks,
        toggleActions: "restart paused restart paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    duration: 1,
    opacity: 0,
    color: "#fff",
    y: -100,
    ease: "power1.inOut",
});

let body11 = document.getElementById("body11");
gsap.from(body11, {
    scrollTrigger: {
        trigger: body11,
        toggleActions: "restart paused restart paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power2.inOut",
});

let body12 = document.getElementById("body12");
gsap.from(body12, {
    scrollTrigger: {
        trigger: body12,
        toggleActions: "restart reverse  paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: .5,
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power1.inOut",
});

let body13 = document.getElementById('body13');
gsap.from(body13, {
    scrollTrigger: {
        trigger: body13,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power1.inOut",
});

let $lgsbtn = document.getElementById("lgstrd");
gsap.from($lgsbtn, {
    scrollTrigger: {
        trigger: body13,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    opacity: 1,
    x: 200,
    ease: "power1.inOut",
});

let joinUsHHero4 = document.getElementById("joinUsHHero4");

gsap.from(joinUsHHero4, {
    scrollTrigger: {
        trigger: header4,
        toggleActions: "restart restart paused paused",
        start: "top bottom",
        end: "+=300",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power1.inOut",
});

let header41 = document.getElementById("header41");
let registerAsProducer = document.getElementById("registerAsProducer");
let registerAsArtist = document.getElementById("registerAsArtist");
gsap.from(registerAsProducer, {
    scrollTrigger: {
        trigger: header41,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power1.inOut",
});
gsap.from(registerAsArtist, {
    scrollTrigger: {
        trigger: header41,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power1.inOut",
});

let header5 = document.getElementById("header5");
let header5Conten = document.getElementsByClassName('header5Content');

gsap.from(header5Conten[0], {
    scrollTrigger: {
        trigger: header5,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1.5,
    duration: 1,
    opacity: 0,
    ease: "power1.inOut",
});
gsap.from(header5Conten[1], {
    scrollTrigger: {
        trigger: header5,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power1.inOut",
});

let h1header61st = document.getElementById("h1header61st");
let header6 = document.getElementById("header6");
gsap.from(h1header61st, {
    scrollTrigger: {
        trigger: header6,
        toggleActions: "restart paused paused paused",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
    },
    delay: 1,
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power1.inOut",
    stagger: 1
});

function header6Styles() {
    let header6GridWalaDiv = document.getElementById("header6GridWalaDiv");
    let header6Gigs = document.getElementsByClassName("header6Gigs");

    gsap.from(header6Gigs[0], {
        scrollTrigger: {
            trigger: header6GridWalaDiv,
            toggleActions: "restart paused paused paused",
            start: "top bottom",
            end: "+=500",
            scrub: 1,
        },
        delay: 1,
        duration: 1,
        y: -100,
        x: -100,
        opacity: 0,
        ease: "bounce.in",
        stagger: 1
    });
    gsap.from(header6Gigs[1], {
        scrollTrigger: {
            trigger: header6GridWalaDiv,
            toggleActions: "restart paused paused paused",
            start: "top bottom",
            end: "+=500",
            scrub: 1,
        },
        delay: 1,
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "bounce.in",
        stagger: 1
    });
    gsap.from(header6Gigs[2], {
        scrollTrigger: {
            trigger: header6GridWalaDiv,
            toggleActions: "restart paused paused paused",
            start: "top bottom",
            end: "+=500",
            scrub: 1,
        },
        delay: 1,
        duration: 1,
        y: -100,
        x: 100,
        opacity: 0,
        ease: "bounce.in",
        stagger: 1
    });
    gsap.from(header6Gigs[3], {
        scrollTrigger: {
            trigger: header6GridWalaDiv,
            toggleActions: "restart paused paused paused",
            start: "top 90%",
            end: "+=500",
            scrub: 1,
        },
        delay: 1.5,
        duration: 1,
        y: 100,
        x: -100,
        opacity: 0,
        ease: "bounce.in",
        stagger: 1
    });
    gsap.from(header6Gigs[4], {
        scrollTrigger: {
            trigger: header6GridWalaDiv,
            toggleActions: "restart paused paused paused",
            start: "top 90%",
            end: "+=500",
            scrub: 1,
        },
        delay: 1.5,
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "bounce.in",
        stagger: 1
    });
    gsap.from(header6Gigs[5], {
        scrollTrigger: {
            trigger: header6GridWalaDiv,
            toggleActions: "restart paused paused paused",
            start: "top 90%",
            end: "+=500",
            scrub: 1,
        },
        delay: 1.5,
        duration: 1,
        y: 100,
        x: 100,
        opacity: 0,
        ease: "bounce.in",
        stagger: 1
    });
};
header6Styles();

function header7Styles() {
    let header7 = document.getElementById("header7");
    let SatisfiedCustomer = document.getElementById("Satisfied-customer");
    let wpsauPara = document.getElementById("wpsauPara");

    gsap.from(SatisfiedCustomer, {
        scrollTrigger: {
            trigger: header7,
            toggleActions: "restart paused paused paused",
            start: "top 90%",
            end: "+=100",
            scrub: 1,
        },
        delay: 1,
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "expo.in",
        stagger: 1
    });

    gsap.from(wpsauPara, {
        scrollTrigger: {
            trigger: header7,
            toggleActions: "restart paused paused paused",
            start: "top 90%",
            end: "+=100",
            scrub: 1,
        },
        delay: 1,
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "expo.in",
        stagger: 1
    });
};
header7Styles();