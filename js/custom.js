const lenis = new Lenis({

});

function onRaf(time) {
	lenis.raf(time);
	requestAnimationFrame(onRaf);
}

requestAnimationFrame(onRaf);


const elem = document.querySelectorAll(".elem")
elem.forEach(function(item){
let images = item.querySelector("img")
let tl = gsap.timeline()
let xtransform = gsap.utils.random(-100, 100);


tl
.set(images, {
    transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
},"start")

.to(images,{
    scale:0,
    ease:"none",
    scrollTrigger:{
        trigger:item,
        start: "top top",
        end : "bottom top",
        scrub: true
    }
}, "start")

.to(item,{
    xPercent: xtransform,
    ease:"Power4.easeInOut",
    scrollTrigger:{
        trigger: images,
        start: "top bottom",
        end : "bottom top",
        scrub: true
    }
},"start")

});



