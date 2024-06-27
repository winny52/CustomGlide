import React from 'react';
import { useNavigate } from 'react-router-dom';

const MiniFAQ = () => {
    const navigate=useNavigate();
    const handleClick = () => {
       navigate('/faqs');
     };
     

  return (
    <div className="text-blue-900 pt-20">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="faq-item">
            <h3 className="text-xl font-semibold mb-4">What services do you offer?</h3>
            <p>
              We offer a comprehensive range of web design and development services, including custom website design, responsive design, e-commerce solutions, custom web applications, UI/UX design, website maintenance, SEO services, content creation, and PPC advertising.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="faq-item">
            <h3 className="text-xl font-semibold mb-4">How long does it take to build a website?</h3>
            <p>
              The timeline for building a website depends on the scope and complexity of the project. On average, a custom website can take anywhere from 6 to 12 weeks to complete. This includes the discovery, planning, design, development, and testing phases. We will provide a detailed timeline for your specific project during the planning phase.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="faq-item">
            <h3 className="text-xl font-semibold mb-4">What is the cost of a custom website?</h3>
            <p>
              The cost of a custom website varies based on the scope and complexity of the project. We offer competitive pricing and flexible packages to suit different budgets and needs. During the discovery phase, we will provide a detailed quote based on your specific requirements.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button  onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white hover:text-white hover:bg-blue-800 rounded hover:bg-blue-800">Explore More FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default MiniFAQ;
