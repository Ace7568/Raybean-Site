Shery.mouseFollower({
    //Parameters are optional.
    // skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,
  });

Shery.imageEffect(".back", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 0.99, range: [0, 30] },
    b: { value: -0.99, range: [-1, 1] },
    aspect: { value: 1.8306351183063512 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1, range: [0, 10] },
    metaball: { value: 0.3, range: [0, 2] },
    discard_threshold: { value: 0.73, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  //   debug: true,
});



var elem = document.querySelectorAll(".elem");

elem.forEach((val)=>{

  val.addEventListener("mouseenter",function(){
    // console.log("Enter")
    val.childNodes[3].style.opacity = 1;
    
  })
  val.addEventListener("mousemove",function(e){
    val.childNodes[3].style.top = e.clientY + 'px';
    val.childNodes[3].style.left = e.clientX + 'px';
  })
  val.addEventListener("mouseleave",function(){
    // console.log("leave")
    val.childNodes[3].style.opacity = 0;
  })
})
