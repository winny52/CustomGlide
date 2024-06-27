import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {

  const navigate=useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <div className=" text-blue-900 pt-20">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="faq-item">
            <h3 className="text-xl text-black font-semibold mb-4">What services do you offer?</h3>
            <p>
              We offer a comprehensive range of web design and development services, including custom website design, responsive design, e-commerce solutions, custom web applications, UI/UX design, website maintenance, SEO services, content creation, and PPC advertising.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="faq-item">
            <h3 className="text-xl text-black font-semibold mb-4">How long does it take to build a website?</h3>
            <p>
              The timeline for building a website depends on the scope and complexity of the project. On average, a custom website can take anywhere from 6 to 12 weeks to complete. This includes the discovery, planning, design, development, and testing phases. We will provide a detailed timeline for your specific project during the planning phase.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="faq-item">
            <h3 className="text-xl  text-black font-semibold mb-4">What is the cost of a custom website?</h3>
            <p>
              The cost of a custom website varies based on the scope and complexity of the project. We offer competitive pricing and flexible packages to suit different budgets and needs. During the discovery phase, we will provide a detailed quote based on your specific requirements.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="faq-item">
            <h3 className="text-xl text-black font-semibold mb-4">Do you offer ongoing support?</h3>
            <p>
              Yes, we offer ongoing maintenance and support services to ensure that your website remains in top condition. Our maintenance plans include regular updates, security patches, performance optimization, and more. We are committed to providing long-term support to help you succeed.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="faq-item">
            <h3 className="text-xl text-black font-semibold mb-4">How do you handle SEO?</h3>
            <p>
              Our SEO services include a comprehensive approach to improving your site’s visibility on search engines. This includes keyword research, on-page optimization, link building, and more. We use proven strategies and best practices to help you achieve higher rankings and drive more traffic to your site.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="faq-item">
            <h3 className="text-xl  text-black font-semibold mb-4">Can you help with content creation?</h3>
            <p>
              Yes, we offer content creation services, including copywriting, blog writing, video production, and more. Our team of skilled writers and content creators can help you create high-quality, engaging content that resonates with your audience and supports your marketing goals.
            </p>
          </div>

          {/* FAQ 7 */}
          <div className="faq-item">
            <h3 className="text-xl text-black font-semibold mb-4">What is PPC advertising, and how can it help my business?</h3>
            <p>
              PPC (pay-per-click) advertising is a form of online advertising where you pay each time someone clicks on your ad. It’s a powerful tool for driving targeted traffic to your site and increasing conversions. Our PPC services include campaign setup, management, and optimization to help you maximize your ROI.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button    onClick={handleClick} className="bg-orange-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded" aria-label="Contact Us for More Information">
            Contact Us for More Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;