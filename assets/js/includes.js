// Defining Layering
const currentURL = location.pathname.replace('/budget-renovations', '');  //budget-renovation is the name of git repo
let urlList = currentURL.replace("/", " ").split("/");
let layer = urlList.length;
let prependURLString = "";
switch (layer) {
   case 1:
      prependURLString = "./";
      break;
   case 2:
      prependURLString = "../";
      break;
   case 3:
      prependURLString = "../../";
      break;
   case 4:
      prependURLString = "../../../";
      break;
   case 5:
      prependURLString = "../../.../";
      break;
   default:
      prependURLString = "./";
      break;
}


// ===========================================================
// ! HEADER of the website
// ===========================================================

// Class
class WebsiteHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <header>
            <!-- Top Nav -->
            <aside class="hidden md:block bg-light">
               <div class="container mx-auto">
                  <div class="flex justify-between items-center py-6">
                     <!-- left part -->
                     <div class="flex items-center gap-8">
                        <div class="flex items-center gap-2">
                           <i class="bi bi-map text-orange text-2xl"></i>
                           <div class="flex flex-col">
                              <span
                                 class="uppercase text-[11px] opacity-80 tracking-wide"
                              >
                                 find us
                              </span>
                              <a
                                 href="#"
                                 class="uppercase font-semibold text-sm leading-none hover:text-orange"
                              >
                                 Somewhere, New Zealand
                              </a>
                           </div>
                        </div>
                        <div class="flex items-center gap-2">
                           <i class="bi bi-phone text-orange text-2xl"></i>
                           <div class="flex flex-col">
                              <span
                                 class="uppercase text-[11px] opacity-80 tracking-wide"
                              >
                                 call us today
                              </span>
                              <a
                                 href="#"
                                 class="uppercase font-semibold text-sm leading-none hover:text-orange"
                              >
                                 +64 3 345 6789
                              </a>
                           </div>
                        </div>
                     </div>
                     <!-- right part -->
                     <div class="flex items-center gap-2">
                        <i class="bi bi-envelope text-orange text-2xl"></i>
                        <div class="flex flex-col">
                           <span
                              class="uppercase text-[11px] opacity-80 tracking-wide"
                           >
                              Email Us Now
                           </span>
                           <a
                              href="#"
                              class="uppercase font-semibold text-sm leading-none hover:text-orange"
                           >
                              sitename@email.com
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </aside>

            <!-- Main Nav -->
            <nav class="bg-dark text-light" id="mainNav">
               <div class="container mx-auto relative">
                  <div class="flex justify-end items-center">
                     <!-- Logo -->
                     <div class="nav-logo-wrapper">
                        <div class="nav-logo px-[1rem] lg:px-[1.5rem]">
                           <a href="${prependURLString}index.html">
                              <img
                                 src="${prependURLString}assets/img/budget-renovation-logo.svg"
                                 alt="Budget Renovations Logo"
                                 class="w-[120px] lg:w-[160px]"
                              />
                           </a>
                        </div>
                     </div>
                     <!-- Navigation Links -->
                     <ul
                        class="hidden md:flex items-center gap-4 mainNavMenu desktopNavMenu"
                     >
                        <li>
                           <a
                              href="${prependURLString}index.html"
                              class="font-medium px-3 py-4 lg:p-5 inline-block capitalize text-md hover:text-orange"
                           >
                              Home
                           </a>
                        </li>
                        <li>
                           <a
                              href="${prependURLString}about.html"
                              class="font-medium px-3 py-4 lg:p-5 inline-block capitalize text-md hover:text-orange"
                           >
                              About Us
                           </a>
                        </li>
                        <li>
                           <a
                              href="${prependURLString}services/index.html"
                              class="font-medium px-3 py-4 lg:p-5 inline-block capitalize text-md hover:text-orange"
                           >
                              Services
                           </a>
                        </li>
                        <li>
                           <a
                              href="${prependURLString}blog/index.html"
                              class="font-medium px-3 py-4 lg:p-5 inline-block capitalize text-md hover:text-orange"
                           >
                              Blog
                           </a>
                        </li>
                        <li>
                           <a
                              href="${prependURLString}contact.html"
                              class="font-medium px-3 py-4 lg:p-5 inline-block capitalize text-md hover:text-orange"
                           >
                              Contact Us
                           </a>
                        </li>
                     </ul>

                     <!-- Hamburger -->
                     <button
                        id="btnToggleNavMenu"
                        class="block md:hidden focus:outline-none py-3"
                        title="Toggle Menu"
                     >
                        <i class="bi bi-list text-3xl"></i>
                     </button>

                     <!-- Mobile Menu -->
                     <div class="md:hidden">
                        <ul
                           id="mobileNavMenu"
                           class="mainNavMenu mobileNavMenu absolute z-20 hidden flex-col gap-4 items-center self-end p-10 mt-10 sm:w-auto sm:self-center drop-shadow-lg bg-light text-bluishDark left-5 right-5 top-[4rem]"
                        >
                           <li>
                              <a
                                 href="${prependURLString}index.html"
                                 class="font-medium hover:text-orange"
                              >
                                 Home
                              </a>
                           </li>
                           <li>
                              <a
                                 href="${prependURLString}about.html"
                                 class="font-medium hover:text-orange"
                              >
                                 About Us
                              </a>
                           </li>
                           <li>
                              <a
                                 href="${prependURLString}services/index.html"
                                 class="font-medium hover:text-orange"
                              >
                                 Services
                              </a>
                           </li>
                           <li>
                              <a
                                 href="${prependURLString}blog/index.html"
                                 class="font-medium hover:text-orange"
                              >
                                 Blog
                              </a>
                           </li>
                           <li>
                              <a
                                 href="${prependURLString}contact.html"
                                 class="font-medium hover:text-orange"
                              >
                                 Contact Us
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </nav>
         </header>
      `;
   }
}
// Rendering
customElements.define('website-header', WebsiteHeader);

// Navbar Toggle
const btnMenu = document.getElementById("btnToggleNavMenu");
const mainNav = document.getElementById("mobileNavMenu");

btnMenu.addEventListener('click', function () {
   mainNav.classList.toggle('flex');
   mainNav.classList.toggle('hidden');
})

// Find outside click
var ignoreClickOnMeElement = document.getElementById('btnToggleNavMenu');

document.addEventListener('click', function (event) {
   var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
   if (!isClickInsideElement && mainNav.classList.contains("flex")) {
      mainNav.classList.toggle("hidden");
      mainNav.classList.toggle("flex");
   }
});

// Active Link
const navLinks = document.querySelectorAll(".mainNavMenu li a");
// const currentURL = location.pathname.replace('/budget-renovations', '');
navLinks.forEach(link => {
   if (link.getAttribute('href').split("/")[1] == currentURL.split("/")[1]) {
      link.classList.toggle("active");
   }
});

// Sticky Navigation On Top
const navigationMenu = document.querySelector('nav');
window.onscroll = function () {
   if (window.pageYOffset > 80) {
      navigationMenu.style.position = "fixed";
      navigationMenu.style.top = "0px";
      navigationMenu.style.width = "100%";
      navigationMenu.style.zIndex = "1000";
   } else {
      navigationMenu.style.position = "static";
      navigationMenu.style.top = "initial";
      navigationMenu.style.width = "100%";
      navigationMenu.style.zIndex = "1000";
   }
}


// ===========================================================
// ! FOOTER of the website
// ===========================================================
// Element Class
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
                        href="${prependURLString}contact.html"
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
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:bg-[#C13584] hover:text-light"
                           title="Follow on Instagram"
                           ><i class="bi bi-instagram"></i
                        ></a>
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:bg-[#4267B2] hover:text-light"
                           title="Follow on Facebook"
                           ><i class="bi bi-facebook"></i
                        ></a>
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:bg-[#1DA1F2] hover:text-light"
                           title="Follow on Twitter"
                           ><i class="bi bi-twitter"></i
                        ></a>
                        <a
                           href="#"
                           class="bg-light text-bluishDark w-8 h-8 grid place-content-center rounded-md transition ease-out duration-300 hover:bg-orange hover:bg-[#0077b5] hover:text-light"
                           title="Follow on Linkedin"
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
                     src="${prependURLString}assets/img/budget-renovation-logo.svg"
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
// Rendering
customElements.define('website-footer', WebsiteFooter);


