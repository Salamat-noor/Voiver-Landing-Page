////////////////////////////////////////////////////////
//      For Hero One Form           //////////
////////////////////////////////////////////////
let _1st_Input = document.getElementById('_1st-Input');
let drpdwn1 = document.getElementById('option1');
//////////////////////////////////////////////////
let _2nd_Input = document.getElementById('_2nd-Input');
let _2nd_Input_1st_OPT = document.getElementById('_2nd-Input-1st-OPT');
//////////////////////////////////////////////////
let _3rd_Input = document.getElementById('_3rd-Input');
let _3rd_Input_1st_OPT = document.getElementById('_3rd_Input_1st-OPT');
//////////////////////////////////////////////////
let _4th_Input = document.getElementById('_4th-Input');
let _4th_Input_1st_OPT = document.getElementById('_4th-Input-1st-OPT');
//////////////////////////////////////////////////
let fifthInput = document.getElementById('_1st-input-2nd-Sec');
let fifthInputOPT = document.getElementById('_1st-input-2nd-Sec-1st-OPT');
//////////////////////////////////////////////////
let checkbox1 = document.getElementById('TimeSyncAudio');
let checkbox2 = document.getElementById('CommercialLicence');
/////////////////////////////////////////////////
let clear_filter = document.getElementById('clear-filter');

clear_filter.addEventListener('click', function () {
    _1st_Input.value = drpdwn1.value;
    _2nd_Input.value = _2nd_Input_1st_OPT.value;
    _3rd_Input.value = _3rd_Input_1st_OPT.value;
    _4th_Input.value = _4th_Input_1st_OPT.value;
    fifthInput.value = fifthInputOPT.value;
});
///////////////////////////////////////////////////
///        End of Hero One          ////////////
////////////////////////////////////////////////////

let gigsratedStars = document.querySelectorAll('.gigsratedStars');

gigsratedStars.forEach((elems) => {
    elems.addEventListener('click', () => {
        // console.log(elems.src);
        // console.log(elems.src == "./Images/star_FILL0_wght400_GRAD0_opsz24.svg");

        if (elems.src == "file:///C:/Users/NoooR/OneDrive/Desktop/FIGMA%20PRACTICE/Images/star_FILL0_wght400_GRAD0_opsz24.svg") {
            elems.setAttribute("src", "./images_2/Vector (2).svg");
        }
        else if (elems.src == "http://127.0.0.1:5500/Images/star_FILL0_wght400_GRAD0_opsz24.svg") {
            elems.setAttribute("src", "./images_2/Vector (2).svg");
        } else {
            elems.setAttribute("src", "./Images/star_FILL0_wght400_GRAD0_opsz24.svg");
        };
    });
});
///////////////////////////////////////////////////////////
//          GSAP CUSTOMS FOR MAIN PARENT  ///////////
///////////////////////////////////////////////////////////
let search_Result = document.getElementById('search-Result');
let logo = document.getElementById('logo');
let gigs = document.querySelectorAll('.gigs');
gsap.registerPlugin(ScrollTrigger);


gsap.from(logo, {
    duration: 1,
    y: -100 + "%",
    opacity: 0,
    scale: 0
});
gsap.from(search_Result, {
    scrollTrigger: {
        trigger: search_Result,
        toggleActions: "restart paused restart paused",
    },
    opacity: 0,
    duration: 1
});

gigs.forEach(function (values) {
gsap.from(values, {
    scrollTrigger: {
        trigger: values,
        toggleActions: "restart paused restart paused",
        start: "top bottom",
        end: "+=300",
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
    scale: 0,
    stagger: 1,
    yoyo: 1
});
});