import React from 'react';
import WebsiteDesignImage from '../assets/teamphotos/webdesignanddev.jpg';
import ResponsiveDesignImage from '../assets/teamphotos/responsivedesign.jpg';
import ECommerceImage from '../assets/teamphotos/ecommerce solutions.jpg';
import CustomWebAppsImage from '../assets/teamphotos/customimageapplications.jpg';
import UIUXDesignImage from '../assets/teamphotos/Userdesign.jpg';
import WebsiteMaintenanceImage from '../assets/teamphotos/websitemaintenance.jpg';
import SEOServicesImage from '../assets/teamphotos/seo services.jpg';
import ContentCreationImage from '../assets/teamphotos/contentcreation.jpg';
import PPCAdvertisingImage from '../assets/teamphotos/ppc.jpg';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate=useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  
  return (
    <div className=" font-sans text-blue-900 p-4 pt-16 rounded-2xl">
      <div className="container mx-auto py-12">
        <div className='m-10 flex items-center'>
          <section>
            <h2 className="text-4xl text-blue-700 font-semibold mb-8">Our Services</h2>
            <p className="w-3/4 text-xl">At CustomGlide, we offer a wide range of services designed to help you achieve your business goals. Whether you’re looking to build a new website from scratch, revamp your existing site, or develop custom web applications, we have the expertise and experience to deliver top-notch solutions tailored to your needs.</p>
          </section>
        </div>

        <div className="space-y-20">
          {/* Website Design & Development */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={WebsiteDesignImage} alt="Website Design & Development" className="w-1/2 h-auto rounded-md mr-4" />
            <div >
              <h3 className="text-xl font-semibold mb-4">Website Design & Development</h3>
              <p>We create custom websites that are not only visually appealing but also highly functional and user-friendly. Our design process involves a deep understanding of your brand and business objectives, ensuring that your website not only looks great but also performs exceptionally. We use the latest technologies and best practices to build websites that are responsive, fast, and secure.</p>
            </div>
          </div>

          {/* Responsive Design */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={ResponsiveDesignImage} alt="Responsive Design" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
              <p>In today’s mobile-first world, it’s crucial that your website looks and works great on all devices. Our responsive design approach ensures that your site provides an optimal viewing experience across a wide range of devices, from desktops and laptops to tablets and smartphones. We focus on creating intuitive and engaging user interfaces that enhance the user experience and keep visitors coming back.</p>
            </div>
          </div>

          {/* E-commerce Solutions */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={ECommerceImage} alt="E-commerce Solutions" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">E-commerce Solutions</h3>
              <p>Whether you’re starting a new online store or looking to upgrade your existing e-commerce platform, we have the solutions you need to succeed. Our e-commerce services include custom shopping cart development, payment gateway integration, product catalog management, and more. We design and develop e-commerce websites that are secure, scalable, and easy to manage, helping you drive sales and grow your business.</p>
            </div>
          </div>

          {/* Custom Web Applications */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={CustomWebAppsImage} alt="Custom Web Applications" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Custom Web Applications</h3>
              <p>Sometimes, off-the-shelf solutions just won’t cut it. That’s where our custom web application development services come in. We work closely with you to understand your unique requirements and develop bespoke applications that meet your specific needs. Whether you need a complex business application, a customer portal, or a custom content management system, we have the skills and experience to deliver.</p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={UIUXDesignImage} alt="UI/UX Design" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p>A great user experience is essential for the success of any digital product. Our UI/UX design services focus on creating intuitive and engaging interfaces that delight users and drive engagement. We use a user-centered design approach, combining user research, wireframing, prototyping, and testing to create designs that are both beautiful and functional.</p>
            </div>
          </div>

          {/* Website Maintenance */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={WebsiteMaintenanceImage} alt="Website Maintenance" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Website Maintenance</h3>
              <p>Keeping your website up-to-date and secure is crucial for maintaining its performance and protecting it from threats. Our website maintenance services include regular updates, security patches, performance optimization, and more. We offer flexible maintenance plans tailored to your needs, ensuring that your site remains in top condition at all times.</p>
            </div>
          </div>

          {/* SEO Services */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={SEOServicesImage} alt="SEO Services" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">SEO Services</h3>
              <p>A beautiful website is worthless if no one can find it. Our SEO services help you improve your site’s visibility on search engines, driving more traffic and generating more leads. We use a comprehensive approach to SEO, including keyword research, on-page optimization, link building, and more. Our goal is to help you achieve higher rankings and increase your online presence.</p>
            </div>
          </div>

          {/* Content Creation */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={ContentCreationImage} alt="Content Creation" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
              <p>Content is king in the digital world. Our content creation services include copywriting, blog writing, video production, and more. We create high-quality, engaging content that resonates with your audience and supports your marketing goals. Whether you need compelling website copy, informative blog posts, or engaging social media content, we’ve got you covered.</p>
            </div>
          </div>

          {/* PPC Advertising */}
          <div className="service bg-gray-300 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl md:flex items-center">
            <img src={PPCAdvertisingImage} alt="PPC Advertising" className="w-1/2 h-auto rounded-md mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-4">PPC Advertising</h3>
              <p>Pay-per-click advertising is a powerful tool for driving targeted traffic to your site. Our PPC services include campaign setup, management, and optimization across platforms like Google Ads, Bing Ads, and social media. We use data-driven strategies to maximize your ROI and help you achieve your marketing goals.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button   onClick={handleClick}    className="bg-orange-600 hover:text-white hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;