
function anchors() {

   const anchors = document.querySelectorAll('[data-anchor]')
   anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {

         // берем айди
         e.preventDefault()
         const id = anchor.getAttribute('href')
         const section = document.getElementById(id)

         // зыкрыть бургер
         document.querySelector('[data-burger-menu]').classList.remove('_active')
         document.querySelector('[data-burger-menu-shadow]').classList.remove('_active')
         document.querySelector('body').style.overflow = 'auto'

         // переходим по айди
         const offset = section.offsetTop;
         window.scrollTo({
            top: offset,
            behavior: 'smooth'
         });

      })
   })

}
export { anchors }


