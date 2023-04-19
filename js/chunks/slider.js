function slider() {

   // <!--  расположить -->
   new Swiper('.slider .swiper', {

      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 30,
      loop: true,
      speed: 1200,
      autoHeight: true,
      // autoplay: {
      //    delay: 3500,
      // },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         // 320: {
         //    slidesPerView: 1,
         // },
         // 480: {
         //    slidesPerView: 2,
         // },
         // 992: {
         //    slidesPerView: 3,
      }

   })



}
export {
   slider,
}
