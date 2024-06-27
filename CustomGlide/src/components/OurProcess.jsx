// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProcessPage = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/detailedprocess');
//   };

//   return (
//     <div className="mx-auto font-sans py-12 pt-20 px-4 md:px-8">
//       <div className="container mx-auto p-4 bg-gray-200 rounded-xl shadow-2xl">
//         <h2 className="text-4xl font-bold text-center mb-8">Our Process: A Seamless Journey from Concept to Launch</h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 1: Discovery: Understanding Your Goals and Requirements</h3>
//             <p className="text-lg text-gray-700">
//               We kickstart by understanding your business objectives, audience, and needs through consultations and research.
//             </p>
//           </div>
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 2: Planning: Crafting a Detailed Project Roadmap</h3>
//             <p className="text-lg text-gray-700">
//               We develop a comprehensive plan outlining the scope, timeline, and milestones, ensuring every aspect is meticulously organized.
//             </p>
//           </div>
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 3: Design: Creating a User-Friendly and Appealing Design</h3>
//             <p className="text-lg text-gray-700">
//               Your vision comes to life as we work closely to design interfaces that are both visually appealing and user-centric.
//             </p>
//           </div>
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 4: Development: Building a Robust and Scalable Website</h3>
//             <p className="text-lg text-gray-700">
//               Our expert developers utilize cutting-edge technologies to build a reliable and scalable solution tailored to your requirements.
//             </p>
//           </div>
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 5: Testing: Ensuring Functionality and Performance</h3>
//             <p className="text-lg text-gray-700">
//               Rigorous testing ensures your website or application functions flawlessly, meeting high standards in functionality, security, and performance.
//             </p>
//           </div>
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 6: Launch: Deploying Your Site Live</h3>
//             <p className="text-lg text-gray-700">
//               We seamlessly deploy your website or application, providing training and support to ensure a smooth transition.
//             </p>
//           </div>
//           <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between h-full">
//             <h3 className="text-2xl font-semibold text-black">Step 7: Maintenance: Ongoing Support and Updates</h3>
//             <p className="text-lg text-gray-700">
//               Beyond launch, we offer continuous maintenance and support, ensuring your digital asset remains optimized and secure.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 text-center mb-8">
//           <button onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800">
//             Learn More About Our Process
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Step 1: Discovery: Understanding Your Goals and Requirements",
      description: "We kickstart by understanding your business objectives, audience, and needs through consultations and research."
    },
    {
      title: "Step 2: Planning: Crafting a Detailed Project Roadmap",
      description: "We develop a comprehensive plan outlining the scope, timeline, and milestones, ensuring every aspect is meticulously organized."
    },
    {
      title: "Step 3: Design: Creating a User-Friendly and Appealing Design",
      description: "Your vision comes to life as we work closely to design interfaces that are both visually appealing and user-centric."
    },
    {
      title: "Step 4: Development: Building a Robust and Scalable Website",
      description: "Our expert developers utilize cutting-edge technologies to build a reliable and scalable solution tailored to your requirements."
    },
    {
      title: "Step 5: Testing: Ensuring Functionality and Performance",
      description: "Rigorous testing ensures your website or application functions flawlessly, meeting high standards in functionality, security, and performance."
    },
    {
      title: "Step 6: Launch: Deploying Your Site Live",
      description: "We seamlessly deploy your website or application, providing training and support to ensure a smooth transition."
    },
    {
      title: "Step 7: Maintenance: Ongoing Support and Updates",
      description: "Beyond launch, we offer continuous maintenance and support, ensuring your digital asset remains optimized and secure."
    }
  ];

  const handleNext = () => {
    if (currentStep + 3 < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClick = () => {
    navigate('/detailedprocess');
  };

  const getDisplayedSteps = () => {
    const end = Math.min(currentStep + 3, steps.length);
    return steps.slice(currentStep, end);
  };

  return (
    <div className="mx-auto font-sans py-12 pt-20 px-4 md:px-8">
      <div className="container mx-auto p-4 bg-gray-200 rounded-xl shadow-2xl">
        <h2 className="text-4xl text-blue-700 font-bold text-center mb-8">Our Process: A Seamless Journey from Concept to Launch</h2>
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            className={`px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800 ${currentStep === 0 ? ' cursor-not-allowed' : ''}`}
            disabled={currentStep === 0}
          >
            &lt;
          </button>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 justify-center mx-4">
            {getDisplayedSteps().map((step, index) => (
              <div key={index} className="bg-white p-4 md:p-6  border-black rounded-xl  flex flex-col justify-between h-full">
                <h3 className="text-2xl font-semibold text-blue-900">{step.title}</h3>
                <p className="text-lg text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-700 ${currentStep + 3 >= steps.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentStep + 3 >= steps.length}
          >
             &gt;
          </button>
        </div>
        <div className="mt-8 text-center mb-8">
          <button onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800">
            Learn More About Our Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
