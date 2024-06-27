import React from 'react';
import Step1Image from '../assets/STEP1.jpg';
import Step2Image from '../assets/STEP2.jpg';
import Step3Image from '../assets/STEP3.jpg';
import Step4Image from '../assets/STEP4.jpg';
import Step5Image from '../assets/STEP5.jpg';
import Step6Image from '../assets/STEP6.jpg';
import Step7Image from '../assets/STEP7.jpg';
import { useNavigate } from 'react-router-dom';

const DetailedProcess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container  font-sans mx-auto p-6 pt-24 rounded-2xl">
      <h1 className='text-3xl font-bold mb-6 text-blue-700'>Our Process</h1>
      <h2 className="text-xl mb-8 font-semibold te">At CustomGlide, we believe that a well-defined process is the key to delivering successful projects. Our process is designed to ensure that we understand your needs, deliver high-quality solutions, and provide a seamless experience from start to finish.</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 1: Discovery</h3>
        <p>Understanding Your Goals and Requirements</p>
        <p>The first step in our process is to understand your goals and requirements. We start with a discovery phase, where we gather information about your business, your target audience, and your objectives. This phase includes detailed consultations, questionnaires, and research to ensure that we have a clear understanding of your needs and expectations.</p>
        <img src={Step1Image} alt="Step 1" className="mt-4 mx-auto" />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 2: Planning</h3>
        <p>Crafting a Detailed Project Roadmap</p>
        <p>Once we have a clear understanding of your goals and requirements, we move on to the planning phase. During this phase, we develop a detailed project roadmap that outlines the scope, timeline, and milestones of the project. We create a comprehensive plan that includes wireframes, design concepts, and technical specifications, ensuring that every aspect of the project is carefully planned and organized.</p>
        <img src={Step2Image} alt="Step 2" className="mt-4 mx-auto" />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 3: Design</h3>
        <p>Creating a User-Friendly and Appealing Design</p>
        <p>The design phase is where your vision starts to take shape. Our designers work closely with you to create a user-friendly and visually appealing design that reflects your brand and meets your objectives. We focus on creating intuitive interfaces and engaging user experiences, using the latest design trends and best practices. We provide multiple design concepts and revisions to ensure that you are completely satisfied with the final design.</p>
        <img src={Step3Image} alt="Step 3" className="mt-4 mx-auto" />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 4: Development</h3>
        <p>Building a Robust and Scalable Website</p>
        <p>Once the design is approved, our developers get to work on building your website or application. We use the latest technologies and frameworks to develop a robust and scalable solution that meets your needs. Our development process includes coding, integration, and testing to ensure that everything works perfectly. We follow best practices and coding standards to deliver a high-quality product that is secure, fast, and reliable.</p>
        <img src={Step4Image} alt="Step 4" className="mt-4 mx-auto" />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 5: Testing</h3>
        <p>Ensuring Functionality and Performance</p>
        <p>Before we launch your website or application, we conduct thorough testing to ensure that everything is working as expected. Our testing process includes functional testing, performance testing, security testing, and user acceptance testing. We identify and fix any issues, ensuring that your website or application is ready for launch.</p>
        <img src={Step5Image} alt="Step 5" className="mt-4 mx-auto" />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 6: Launch</h3>
        <p>Deploying Your Site Live</p>
        <p>Once the testing is complete and everything is ready, we move on to the launch phase. We deploy your website or application live, ensuring that everything is set up correctly and working smoothly. We provide training and support to help you get started, and we are available to assist with any post-launch issues or questions.</p>
        <img src={Step6Image} alt="Step 6" className="mt-4 mx-auto" />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Step 7: Maintenance</h3>
        <p>Ongoing Support and Updates</p>
        <p>The launch is just the beginning. We offer ongoing maintenance and support to ensure that your website or application remains in top condition. Our maintenance services include regular updates, security patches, performance optimization, and more. We are committed to providing ongoing support to help you succeed in the long term.</p>
        <img src={Step7Image} alt="Step 7" className="mt-4 mx-auto" />
      </div>
      <div className="text-center mt-6">
      </div>
      <div className="text-center mt-6">
        {/* <button className="bg-orange-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-4">Learn More About Our Process</button> */}
        <button   onClick={handleClick} className="bg-orange-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Get A Free Quote</button>
      </div>
    </div>
  );
};

export default DetailedProcess;
