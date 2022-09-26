class WebsiteContactForm extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <div class="w-full h-full lg:min-w-[400px] xl:min-w-[500px]">
            <form action="#" class="flex flex-col gap-5 bg-light p-5">
               <h4 class="font-semibold text-xl mb-2">
                  Get a free quote
               </h4>
               <!-- Row -->
               <div class="grid lg:grid-cols-2 gap-4">
                  <div class="form-group">
                     <label
                        for="inputFirstName"
                        class="font-normal opacity-80"
                        >First Name</label
                     >
                     <input
                        type="text"
                        id="inputFirstName"
                        class="form-control w-full p-2 border-2 focus:border-orange focus:outline-none"
                     />
                     <span
                        class="error text-red-500 text-sm"
                        id="errorFirstName"
                     >
                     </span>
                  </div>
                  <div class="form-group">
                     <label
                        for="inputEmailAddress"
                        class="font-normal opacity-80"
                        >Email Address</label
                     >
                     <input
                        type="text"
                        id="inputEmailAddress"
                        class="form-control w-full p-2 border-2 focus:border-orange focus:outline-none"
                     />
                     <span
                        class="error text-red-500 text-sm"
                        id="errorEmailAddress"
                     >
                     </span>
                  </div>
               </div>
               <div class="grid lg:grid-cols-2 gap-4">
                  <div class="form-group">
                     <label
                        for="inputPhoneNumber"
                        class="font-normal opacity-80"
                        >Phone Number</label
                     >
                     <input
                        type="text"
                        id="inputPhoneNumber"
                        class="form-control w-full p-2 border-2 focus:border-orange focus:outline-none"
                     />
                     <span
                        class="error text-red-500 text-sm"
                        id="errorPhoneNumber"
                     >
                     </span>
                  </div>
                  <div class="form-group">
                     <label
                        for="inputSubject"
                        class="font-normal opacity-80"
                        >Subject</label
                     >
                     <input
                        type="text"
                        id="inputSubject"
                        class="form-control w-full p-2 border-2 focus:border-orange focus:outline-none"
                     />
                     <span
                        class="error text-red-500 text-sm"
                        id="errorSubject"
                     >
                     </span>
                  </div>
               </div>
               <div class="form-group">
                  <label
                     for="inputMessage"
                     class="font-normal opacity-80"
                     >Message</label
                  >
                  <textarea
                     id="inputMessage"
                     class="form-control w-full p-2 border-2 resize-y focus:border-orange focus:outline-none"
                     cols="30"
                     rows="3"
                  ></textarea>
                  <span
                     class="error text-red-500 text-sm"
                     id="errorMessage"
                  >
                  </span>
               </div>
               <button
                  class="btn btn-sm btn-primary btn-orange btn-hover-dark text-white"
               >
                  <i class="bi bi-send"></i>
                  <span>Send Now</span>
               </button>
            </form>
         </div>
      `;
   }
}
// Rendering
customElements.define('website-contact-form', WebsiteContactForm);