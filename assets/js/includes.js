class WebsiteHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `Lorem Ipsum`;
   }
}
customElements.define('website-header', WebsiteHeader);


class WebsiteFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <footer class="bg-bluishDark text-light">
            <!-- Call to Action Banner -->
            <div class="relative container mx-auto" id="ctaBanner">
               <!-- hidden div display -->
               <div
                  class="hidden xl:block absolute top-3 left-0 bottom-3 w-2/5 h-[100%-2] z-index-1 footer-overlay"
               ></div>
               <div
                  class="flex flex-col gap-8 py-10 md:flex-row md:gap-20 xl:justify-end xl:gap-[8rem] xl:w-3/5 xl:ml-auto"
               >
                  <!-- cta to contact -->
                  <div class="flex flex-col gap-3">
                     <h3 class="font-bold text-2xl">Get your free consultation</h3>
                     <p class="max-w-[400px] opacity-80">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Nostrum animi facere blanditiis autem deleniti quo
                        voluptatem ut voluptate est dignissimos!
                     </p>
                     <a
                        href="../contact.html"
                        class="btn btn-secondary btn-light btn-hover-orange mt-3"
                     >
                        Contact Us
                     </a>
                  </div>
                  <!-- cta to social -->
                  <div class="flex flex-col gap-5 lg:mr-20">
                     <h4 class="font-bold text-xl">Follow Us</h4>
                     <hr
                        class="h-px border-none bg-gradient-to-r from-light w-1/2 md:w-[100%]"
                     />
                     <div class="flex space-x-3">
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:text-light"
                           ><i class="bi bi-instagram"></i
                        ></a>
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:text-light"
                           ><i class="bi bi-facebook"></i
                        ></a>
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:text-light"
                           ><i class="bi bi-twitter"></i
                        ></a>
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:text-light"
                           ><i class="bi bi-linkedin"></i
                        ></a>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Footer -->
            <section
               id="footer"
               class="footer relative container mx-auto py-10 border-t-[1px] border-slate-500 xl:flex xl:justify-end"
            >
               <div
                  class="max-w-[150px] h-auto p-2 bg-light mb-10 xl:w-full xl:absolute xl:top-0 xl:left-[10rem] xl:max-w-[200px] xl:px-5 xl:py-4 xl:rounded-lg xl:-translate-y-[58%]"
               >
                  <img
                     src="../assets/img/budget-renovation-logo.svg"
                     alt="Budget Renovation Logo"
                  />
               </div>
               <div
                  class="flex flex-wrap justify-between gap-10 xl:pl-[4.25rem] xl:w-3/5 xl:ml-auto"
               >
                  <div>
                     <h5 class="font-bold text-md capitalize">Important Links</h5>
                     <ul class="mt-3 flex flex-col gap-1">
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Terms of Service</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Privacy Policy</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >FAQs</a
                           >
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h5 class="font-bold text-md capitalize">Sitemap</h5>
                     <ul class="mt-3 grid grid-cols-2 gap-x-10 gap-y-1">
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Home</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >About Us</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Blogs</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Our Services</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Contact Us</a
                           >
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h5 class="font-bold text-md capitalize">Resources</h5>
                     <ul class="mt-3 flex flex-col gap-1">
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Instagram</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >Tutorials & Blogs</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >News</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="font-light underline capitalize text-sm opacity-80 hover:opacity-100 hover:text-orange"
                              >YouTube</a
                           >
                        </li>
                     </ul>
                  </div>
               </div>
            </section>

            <!-- Copyright -->
            <aside class="copyright bg-dark">
               <div
                  class="container mx-auto flex justify-center flex-wrap gap-[3px] py-3 md:justify-between"
               >
                  <p class="text-sm text-center font-light opacity-90">
                     &copy; copyright 2022 - Budget Renovations | All Rights
                     Reserved.
                  </p>
                  <p class="text-sm text-center font-light opacity-90">
                     Designed & Developed by
                     <a
                        href="https://www.websitevikreta.com/"
                        class="font-bold text-orange hover:underline"
                        target="_BLANK"
                        >Website Vikreta</a
                     >
                  </p>
               </div>
            </aside>
         </footer>         
      `;
   }
}
customElements.define('website-footer', WebsiteFooter);