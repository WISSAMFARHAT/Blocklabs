let fadeIn;

export const RefreshFadeElements = function () {
    const fadeInElements = document.querySelectorAll('.--fadein');

    fadeInElements.forEach(element => {
        fadeIn.observe(element);
    });
}

export const InitializeFadeAnimation = function () {
    fadeIn = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            if (entry.target.classList.contains('_animateOn')) {
                entry.target.classList.remove('_animateOn')
                entry.target.classList.add('_animate')
            }

            entry.target.classList.add('--fadein-animate');
            fadeIn.unobserve(entry.target);

            setTimeout(() => {
                entry.target.classList.remove('--fadein');
                entry.target.classList.remove('--fadein-animate');
            }, 1500);
        })
    }, {
        rootMargin: "0px 0px -30px 0px"
    });

    RefreshFadeElements();
}

const fadersleft = document.querySelectorAll(".fade-left");
const fadersright = document.querySelectorAll(".fade-right");
const faderin = document.querySelectorAll(".fadein");
const faderout = document.querySelectorAll(".fadeout");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearScroll = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("_appear");
            //appearScroll.unobserve(entry.target);
        } else {
            entry.target.classList.remove("_appear");
        }
    });
},
    appearOptions
);

if (fadersleft) {
    fadersleft.forEach(fader => {
        appearScroll.observe(fader);
    })
}

if (fadersright) {
    fadersright.forEach(fader => {
        appearScroll.observe(fader);
    })
}

if (faderin) {
    faderin.forEach(fader => {
        appearScroll.observe(fader);
    })
}
if (faderout) {
    faderout.forEach(fader => {
        appearScroll.observe(fader);
    })
}


