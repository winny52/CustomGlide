// import React from "react";
// import { useEffect } from "react";
// import '../index.css';

// const TawkTo = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://embed.tawk.to/6673180edd590416e257d1ba/1i0opbvs0';
//     script.charset = 'UTF-8';
//     script.setAttribute('crossorigin', '*');

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
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6673180edd590416e257d1ba/1i0opbvs0';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.onload = () => {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      // Function to customize the chat widget
      window.Tawk_API.onLoad = () => {
        window.Tawk_API.toggle();
        // Example: Resize the widget (adjust as per your Tawk.to settings)
        window.Tawk_API.setWidgetSize(100, 200);
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
