// import React, { useEffect } from 'react';

// const TawkTo = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://embed.tawk.to/6673180edd590416e257d1ba/1i0opbvs0';
//     script.charset = 'UTF-8';
//     script.setAttribute('crossorigin', '*');
//     script.onload = () => {
//       window.Tawk_API = window.Tawk_API || {};
//       window.Tawk_LoadStart = new Date();
      
//       // Function to customize the chat widget
//       window.Tawk_API.onLoad = () => {
//         window.Tawk_API.toggle();
//         // Example: Resize the widget based on viewport width
//         const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
//         const height = window.innerHeight > 0 ? window.innerHeight : screen.height;
//         const widgetWidth = Math.min(80, Math.floor(width * 0.1)); // Adjust the percentage as needed
//         const widgetHeight = Math.min(80, Math.floor(height * 0.1)); // Adjust the percentage as needed
//         window.Tawk_API.setWidgetSize(widgetWidth, widgetHeight);
//       };
//     };

//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return null;
// };

// export default TawkTo;
import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Create the Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/668bca35e1e4f70f24eec80e/1i290rot5';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.onload = () => {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Function to customize the chat widget
      window.Tawk_API.onLoad = () => {
        window.Tawk_API.toggle();
        // Example: Resize the widget based on viewport width
        const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        const height = window.innerHeight > 0 ? window.innerHeight : screen.height;
        const widgetWidth = Math.min(80, Math.floor(width * 0.1)); // Adjust the percentage as needed
        const widgetHeight = Math.min(80, Math.floor(height * 0.1)); // Adjust the percentage as needed
        window.Tawk_API.setWidgetSize(widgetWidth, widgetHeight);
      };
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
