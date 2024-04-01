function locomotivejss(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotivejss();

function navanimation(){
    var nav = document.querySelector("nav");
nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to(".nav-bottom",{
        height:"21vh",
    })
    tl.to(".nav-part2 h5",{
        display:"block",
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.1,
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.1,
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1,
    })
    tl.to(".nav-bottom",{
        height:0,
        duration:0.2,
    })
})
}

// navanimation();

function page2animation(){
    var rightElems = document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem){
    console.log(elem)
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity : 1,
            scale : 1,
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity : 0,
            scale : 0,
        })  
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-100,
            y:dets.y - elem.getBoundingClientRect().y-200,
        })
    })
})
}

// page2animation();

function page3animation(){
    var page3center = document.querySelector(".page3-center")
var video = document.querySelector(".page3 video")

page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
    })
    
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px",
    })
})
}

// page3animation();

function page4animation(){
    var sect = document.querySelectorAll(".sec-right")

sect.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
}

// page4animation();

function page5animation(){
    gsap.from(".btm6-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btm6-part2",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true,
        },
    })
}

// page5animation();


function loadinganimation(){
    var tl = gsap.timeline()

tl.from(".page1",{
    opacity:0,
    duration:0.2,
})

tl.from(".page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"100px",
    duration:1,
    ease:"expo.out",
})
tl.from("nav",{
    opacity:0,
})
tl.from(".page1 h1, .page1 div, .page1 p",{
    opacity:0,
    stagger:0.2,
})

}

loadinganimation();





