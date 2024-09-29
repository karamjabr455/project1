
import gsap from "./node_modules/gsap/all.js";


gsap.to(".second-name",{
  y:0,
  delay:1.5,
  duration:1.4,
  stagger:{
    amount:.7,
    axis:'x',
    from:'center'
  },
  ease:'expo.out'
})
gsap.to(".first-Name",{
  x:0,
  delay:2.9,
  duration:1,
  ease:'power4.out'

})
gsap.to(".last-Name",{
  x:0,
  delay:2.9,
  duration:1,
  ease:'power4.out'

})

