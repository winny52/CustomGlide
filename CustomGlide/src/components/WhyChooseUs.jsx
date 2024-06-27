import React from 'react';
import { useNavigate } from 'react-router';


function WhyChooseUs() {
  const navigateto = useNavigate();

  const handleClicksecond = () => {
    navigateto('/about/expertise');
  };



  return (
    <div className=" font-sans  text-blue-900 pt-20">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:m-10">
          <section className="md:w-1/2 md:mr-10">
            <h2 className="text-3xl md:text-4xl text-blue-700 font-semibold mb-4 md:mb-8">Why Choose CustomGlide?</h2>
            <p className="text-gray-900 text-lg md:text-xl">Choosing the right partner for your web design and development needs is crucial to the success of your project. At CustomGlide, we understand that you have many options, and we strive to stand out from the competition by offering unparalleled service, expertise, and results.</p>
          </section>
          <img src='https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_09_5-Best-Programming-Languages-to-Learn-for-Cybersecurity-Professionals-scaled.jpg' alt='' className='rounded-full w-48 h-48 md:w-72 md:h-72 mt-6 md:mt-0' />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 space-y-6 md:space-x-6">
          {/* Expert Team */}
          <div className="feature bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Expert Team</h3>
            <p className='text-gray-900'> Our skilled professionals bring a wealth of experience and expertise to every project, ensuring exceptional results.</p>
          </div>

          {/* Custom Solutions */}
          <div className="feature bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Custom Solutions</h3>
            <p className='text-gray-900'>We believe in tailored solutions that address your unique business needs and goals, delivering exactly what you need.</p>
          </div>

          {/* Proven Track Record */}
          <div className="feature bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Proven Track Record</h3>
            <p className='text-gray-900'>With a history of successful projects, we consistently exceed client expectations, delivering high-quality solutions on time and within budget.</p>
          </div>

          {/* Client-Centric Approach */}
          <div className="feature bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Client-Centric Approach</h3>
            <p className='text-gray-900'>Your satisfaction is our priority. We work closely with you throughout the process to ensure your needs and expectations are met.</p>
          </div>

          {/* Innovative Techniques */}
          <div className="feature bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Innovative Techniques</h3>
            <p className='text-gray-900'>We stay ahead of the curve with the latest technologies and techniques, delivering visually stunning and technically advanced solutions.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button  onClick={handleClicksecond}  className="bg-orange-600 hover:text-black hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">Explore More About Our Expertise</button>
        </div>
      </div>
    
    </div>
  );
}

export default WhyChooseUs;
