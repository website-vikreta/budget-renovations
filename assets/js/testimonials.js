class WebsiteTestimonials extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <section>
            <div class="container mx-auto my-10 md:my-[100px]">
               <div class="title mb-10">
                  <p
                     class="font-bold uppercase tracking-wider text-lg text-center text-orange mb-2"
                  >
                     Testimonials
                  </p>
                  <h2
                     class="font-extrabold capitalize text-center mx-auto mb-2 text-3xl lg:text-4xl max-w-[400px]"
                  >
                     What our customers say “About Us”
                  </h2>
               </div>

               <!-- Slider main container -->
               <div class="testimonial-swiper-wrapper relative">
                  <div class="swiper testimonial-swiper">
                     <!-- Additional required wrapper -->
                     <div class="swiper-wrapper flex flex-wrap gap-5 lg:flex-nowrap">
                        <div
                           class="swiper-slide bg-light p-7 md:p-10 flex flex-col gap-5"
                        >
                           <!-- wuote -->
                           <i class="bi bi-chat-quote text-4xl opacity-30"></i>
                           <!-- review -->
                           <p class="opacity-80">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Veritatis culpa nemo nesciunt sint deleniti
                              laborum obcaecati illo, libero, amet dignissimos
                              suscipit animi voluptatum cumque perspiciatis
                              recusandae et ut laudantium facilis.
                           </p>
                           <div>
                              <p class="font-black leading-none">
                                 Doctor Strange
                              </p>
                              <i class="text-sm opacity-80">
                                 caretaker at <b>Kamartaj</b>
                              </i>
                           </div>
                        </div>
                        <div
                           class="swiper-slide bg-light p-7 md:p-10 flex flex-col gap-5"
                        >
                           <!-- wuote -->
                           <i class="bi bi-chat-quote text-4xl opacity-30"></i>
                           <!-- review -->
                           <p class="opacity-80">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Veritatis culpa nemo nesciunt sint deleniti
                              laborum obcaecati illo, libero, amet dignissimos
                              suscipit animi voluptatum cumque perspiciatis
                              recusandae et ut laudantium facilis.
                           </p>
                           <div>
                              <p class="font-black leading-none">
                                 Shubham Gujarathi
                              </p>
                              <i class="text-sm opacity-80"> Young Citizen </i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      `;
   }
}
// Rendering
customElements.define('website-testimonials', WebsiteTestimonials);


// var swiperTestimonial = new Swiper(".testimonial-swiper", {
//    loop: true,
//    slidesPerView: 1,
//    spaceBetween: 10,
//    freeMode: true,
//    navigation: {
//       nextEl: '.testimonial-btn-next',
//       prevEl: '.testimonial-btn-prev',
//    },
//    breakpoints: {
//       768: {
//          slidesPerView: 2,
//       },
//    },
// });