import {
   slider,
} from "./chunks/slider.js"
import {
   burgerMenu,
} from "./chunks/burgerMenu.js"
import {
   anchors,
} from "./chunks/anchors.js"
import {
   footerSpoilers,
} from "./chunks/footerSpoilers.js"


slider()
burgerMenu()
anchors()
footerSpoilers()

const preloader = document.querySelector('[data-preloader]')
setTimeout(() => {

   preloader.classList.add('_close')
   document.querySelector('body').style.overflowY = `auto`

   new WOW(
      {
         mobile: false,
      }
   ).init();

}, 1000)












