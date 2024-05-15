
function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



}
function cursor (){
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x ,
        y: dets.y,
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale: 1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale: 0,
        opacity:0
    })
})
}
function page2Animation(){
    gsap.from("#page2-top h3,#page2-top h4",{
        y: 120,
        duration: 1,
        stagger: 0.2,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 62%",
            // markers: true,
            scrub:2,
        }
    })
    gsap.from("#page2-bottom .elem h1",{
        y: 120,
        duration: 1,
        stagger: 0.2,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            // markers: true,
            scrub:2,
        }
    })
 
}
function page4Animation(){
    gsap.from("#page4-top h3,#page4-top h4",{
        y: 120,
        duration: 1,
        stagger: 0.2,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page4",
            scroller: "#main",
            start: "top 70%",
            end: "top 72%",
            // markers: true,
            scrub:2,
        }
    })
    gsap.from("#page4 #page4-bottom .elem h1",{
        y: 120,
        duration: 1,
        stagger: 0.2,
        scrollTrigger:{
            trigger: "#page4",
            scroller: "#main",
            start: "top 50%",
            end: "top 55%",
            // markers: true,
            scrub:2,
        }
    })
}
function page6Animation(){
    gsap.from("#page6-top h3,#page6-top h4",{
        y: 120,
        duration: 1,
        stagger: 0.2,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page6",
            scroller: "#main",
            start: "top 70%",
            end: "top 72%",
            // markers: true,
            scrub:2,
        }
    })
    gsap.from("#page6 #page6-bottom .elem h1",{
        y: 120,
        duration: 1,
        stagger: 0.2,
        scrollTrigger:{
            trigger: "#page6",
            scroller: "#main",
            start: "top 50%",
            end: "top 55%",
            // markers: true,
            scrub:2,
        }
    })
}
function page5Cursor(){
    var page5 = document.querySelector("#page5");
    var cursor5 = document.querySelector("#cursor5");

    page5.addEventListener("mousemove",function(dets){
        gsap.to(cursor5,{
            x: dets.x ,
            y: dets.y,
        })
    })
    page5.addEventListener("mouseenter",function(){
        gsap.to(cursor5,{
            scale: 1,
            opacity:1
        })
    })
    page5.addEventListener("mouseleave",function(){
        gsap.to(cursor5,{
            scale: 0,
            opacity:0
        })
})
}
function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      }});
}
function loader(){
var tl = gsap.timeline();
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.15
})
tl.to("#loader h3",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.15
})
tl.to("#loader",{
    opacity:0,
},"a")
tl.to("#loader",{
    display: "none",
},"a")
tl.from("nav h3", {
    opacity: 0,
    x: 100,
    duration: 0.8,
    ease: Power3,

},"b")
tl.from("nav h4", {
    opacity: 0,
    duration: 0.8,
    ease: Power3,

})
tl.from("#page1-content h1 span",{
    opacity: 0,
    y:100,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5
},"b")

}
loader();
loco();
cursor();
page2Animation();
page4Animation();
page5Cursor();
page6Animation();
swiper();