document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        gap: 100,
        perView: 3
    }).mount();

    let prevBtn = document.getElementById("prev");
    let nextBtn = document.getElementById("next");

    let background = document.querySelector(".background");
    let indices = document.querySelectorAll(".index");

    let bgImgs = ["la1.jpg", "chi1.jpg", "ny1.jpg", "norcal1.jpg"];

    let currentIndex = 0;

    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");

    var myAnimation = new hoverEffect({
        parent: document.querySelector(".background"),
        intensity: 0.3,
        imagesRatio: 1080 / 1920,
        image1: `images/${bgImgs[0]}`,
        image2: `images/${bgImgs[1]}`,
        displacementImage: "images/distort.jpg",
        hover: false
    });

    var myAnimation2 = new hoverEffect({
        parent: document.querySelector(".background"),
        intensity: 0.3,
        imagesRatio: 1080 / 1920,
        image1: `images/${bgImgs[1]}`,
        image2: `images/${bgImgs[2]}`,
        displacementImage: "images/distort.jpg",
        hover: false
    });

    var myAnimation3 = new hoverEffect({
        parent: document.querySelector(".background"),
        intensity: 0.3,
        imagesRatio: 1080 / 1920,
        image1: `images/${bgImgs[2]}`,
        image2: `images/${bgImgs[3]}`,
        displacementImage: "images/distort.jpg",
        hover: false
    });
    
    var myAnimation4 = new hoverEffect({
        parent: document.querySelector(".background"),
        intensity: 0.3,
        imagesRatio: 1080 / 1920,
        image1: `images/${bgImgs[3]}`,
        image2: `images/${bgImgs[0]}`,
        displacementImage: "images/distort.jpg",
        hover: false
    });

    let distortAnimations = [
        myAnimation,
        myAnimation2,
        myAnimation3,
        myAnimation4
    ];

    function startNextDistortAnimation() {
        let prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % 4;
        indices.forEach(index => index.classList.remove("active"));
        indices[currentIndex].classList.add("active");
        distortAnimations[prevIndex].next();
    }

    nextBtn.addEventListener("click", () => {
        startNextDistortAnimation();
    })

    

});