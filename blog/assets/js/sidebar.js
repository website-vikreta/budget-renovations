
// ===========================================================
// ! FOOTER of the website
// ===========================================================
// Element Class
class WebsiteBlogSidebar extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <div class="w-full h-full flex flex-col gap-4 lg:w-[350px] xl:w-[400px]">
            <!-- Search -->
            <div class="bg-light p-4">
               <form action="#" id="formSearchBlog">
                  <div class="form-group flex w-full">
                     <input
                        type="text"
                        class="form-control w-full p-2 border-2 bg-white focus:outline-none focus:border-orange"
                        placeholder="Search"
                     />
                     <button title="Search" class="p-2 w-[50px] bg-orange text-light">
                        <i class="bi bi-search"></i>
                     </button>
                  </div>
               </form>
            </div>
         
            <!-- Recent Articles -->
            <div class="bg-light p-4 lg:sticky top-[100px] z-10">
               <h4 class="font-semibold text-md pb-3 border-b-2">
                  Recent News / Articles
               </h4>
         
               <ul class="flex flex-col gap-3 mt-4">
                  <li class="flex items-start gap-2">
                     <img src="./assets/img/blog-thumbnail-1.webp" class="w-20" alt="Blog Image" />
                     <div>
                        <h5 class="font-semibold text-sm">
                           <a href="#" class="hover:text-orange">Lorem ipsum dolor sit amet, adipiscing elit.</a>
                        </h5>
                        <p class="opacity-80 italic text-xs">15 Sept 2022</p>
                     </div>
                  </li>
                  <li class="flex items-start gap-2">
                     <img src="./assets/img/blog-thumbnail-2.webp" class="w-20" alt="Blog Image" />
                     <div>
                        <h5 class="font-semibold text-sm">
                           <a href="#" class="hover:text-orange">Lorem ipsum dolor sit amet, adipiscing elit.</a>
                        </h5>
                        <p class="opacity-80 italic text-xs">15 Sept 2022</p>
                     </div>
                  </li>
                  <li class="flex items-start gap-2">
                     <img src="./assets/img/blog-thumbnail-3.webp" class="w-20" alt="Blog Image" />
                     <div>
                        <h5 class="font-semibold text-sm">
                           <a href="#" class="hover:text-orange">Lorem ipsum dolor sit amet, adipiscing elit.</a>
                        </h5>
                        <p class="opacity-80 italic text-xs">15 Sept 2022</p>
                     </div>
                  </li>
                  <li class="flex items-start gap-2">
                     <img src="./assets/img/blog-thumbnail-4.webp" class="w-20" alt="Blog Image" />
                     <div>
                        <h5 class="font-semibold text-sm">
                           <a href="#" class="hover:text-orange">Lorem ipsum dolor sit amet, adipiscing elit.</a>
                        </h5>
                        <p class="opacity-80 italic text-xs">15 Sept 2022</p>
                     </div>
                  </li>
               </ul>
            </div>
         
            <!-- Categories -->
            <div class="bg-light p-4">
               <h4 class="font-semibold text-md pb-3 border-b-2">Categories</h4>
         
               <ul class="flex flex-col gap-3 mt-4">
                  <li class="text-sm">
                     <a href="#" class="hover:text-orange">
                        <i class="bi bi-chevron-right"></i>
                        <span>Renovation Materials</span></a
                     >
                  </li>
                  <li class="text-sm">
                     <a href="#" class="hover:text-orange">
                        <i class="bi bi-chevron-right"></i>
                        <span>Company News</span>
                     </a>
                  </li>
                  <li class="text-sm">
                     <a href="#" class="hover:text-orange">
                        <i class="bi bi-chevron-right"></i>
                        <span>Cost Management</span>
                     </a>
                  </li>
                  <li class="text-sm">
                     <a href="#" class="hover:text-orange">
                        <i class="bi bi-chevron-right"></i>
                        <span>Best from Waste</span>
                     </a>
                  </li>
                  <li class="text-sm">
                     <a href="#" class="hover:text-orange">
                        <i class="bi bi-chevron-right"></i>
                        <span>Category new one</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
   
      `;
   }
}
// Rendering
customElements.define('website-blog-sidebar', WebsiteBlogSidebar);