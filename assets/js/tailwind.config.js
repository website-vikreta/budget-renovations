
tailwind.config = {
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      extend: {
         fontFamily: {
            Archivo: ["Archivo", "sans-serif"],
         },
         colors: {
            // Branding
            bluishDark: "#033551",
            orange: "#C75224",
            // Supporting Font
            dark: "#022031",
            light: "#F4F8FB",
            white: "#FFFFFF"
         },
      },
   }
};