function revealToSpan() {

    document.querySelectorAll(".reveal")
        .forEach(function (element) {
            let parent = document.createElement("span");
            let child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = element.innerHTML;
            parent.appendChild(child);

            element.innerHTML = "";
            element.appendChild(parent);
        });
}

function valueSetters() {
    gsap.set(".navbar a", { y: "-100%", opacity: 0, });
    gsap.set(".home span .child", { y: "100%", });
    gsap.set(".home .row img", { opacity: 0 });
    gsap.set(".home .scrolldown", { opacity: 0 });




    document.querySelectorAll("#Visual>g")
        .forEach(function (elem) {
            let character = elem.childNodes[1].childNodes[1];

            character.style.strokeDasharray = character.getTotalLength() + 'px';
            character.style.strokeDashoffset = character.getTotalLength() + 'px';
        })
}

function loaderAnimation() {
    let tl = gsap.timeline();

    tl
        .from(".loader .child span", {
            x: 100,
            delay: .4,
            duration: 1.4,
            stagger: .2,
            ease: Power3.easeInOut

        })

        .to(".loader .parent .child", {
            y: "-100%",
            duration: 1.2,
            ease: Circ.easeInOut

        })
        .to(".loader", {
            height: 0,
            duration: 1.5,
            delay: -.1,
            ease: Circ.easeInOut

        })

        .to(".darkgray", {
            height: "100%",
            top: 0,
            duration: .1,
            delay: -.7,
            ease: Circ.easeInOut

        })

        .to(".darkgray", {
            height: "0%",
            duration: .5,
            delay: -.5,
            ease: Circ.easeInOut,
            onComplete: function () {
                animatedHomepage();
            }
        })
}

function animatedHomepage() {

    let tl = gsap.timeline();
    tl
        .to(".navbar a", {
            y: 0,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut,
        })

        .to(".home .parent .child", {
            y: 0,
            stagger: .2,
            duration: 2,
            ease: Expo.easeInOut
        })

        .to(".home .row img", {
            opacity: 1,
            delay: .1,
            ease: Expo.easeInOut,
            onComplete: function () {
                animationSvg();
            }
        })

        .to(".home .scrolldown", {
            opacity: 1,
            delay: 2.3,
            ease: Expo.easeInOut
        })
}

function animationSvg() {

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 3,
        ease: Expo.easeInOut
    })
}

function locoScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}


function hoverImage() {
    document.querySelectorAll(".imagecontainer")
    .forEach(function (imagecontainer) {
        let showingImage;
        imagecontainer.addEventListener("mousemove", function(dets){
         showingImage = dets.target;
         showingImage.style.filter = "grayscale(1)"

         document.querySelector(".workmain").style.backgroundColor = "#" + showingImage.dataset.color;
        });

        imagecontainer.addEventListener("mouseleave", function(dets){
            showingImage.style.filter = "grayscale(0)"
            document.querySelector(".workmain").style.backgroundColor = "#f2f2f2";
           });
    });

}




revealToSpan();
valueSetters ();
loaderAnimation();
locoScroll();
hoverImage();



/*

document.querySelectorAll(".imagecontainer")
.forEach(function (imagecontainer) {
    let showingImage;
    imagecontainer.addEventListener("mousemove", function(dets){
     document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = 1;
     showingImage = dets.target;
     document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = 
        `translate(${dets.clientX}px, ${dets.clientY}px)`;
     showingImage.style.filter = "grayscale(1)"

     document.querySelector(".workmain").style.backgroundColor = "#" + showingImage.dataset.color;
    });

    imagecontainer.addEventListener("mouseleave", function(dets){
        document.querySelector(".cursor").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)"
        document.querySelector(".workmain").style.backgroundColor = "#f2f2f2";
       });
});

*/