const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth: true}
});

// Changement de couleur du body
scroll.on("scroll", () => {
    // console.log("ça scroll !!!")
    if (document.querySelector("#color.is-inview")) {
        document.body.style.background = "#000101";
        document.body.style.color = "#fefeff";
    } else {
        document.body.style.background = "#fefeff";
        document.body.style.color = "#000101";
    }
});