import React from 'react';
import { useNavigate } from 'react-router';
import photo1 from '../assets/teamphotos/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/teamphotos/photo3.jpeg';
import photo4 from '../assets/teamphotos/photo4.jpeg';
import photo5 from '../assets/teamphotos/photo5.jpeg';
import photo6 from '../assets/teamphotos/photo6.jpeg';
import photo7 from '../assets/teamphotos/photo7.jpeg';
import photo8 from '../assets/teamphotos/photo8.jpeg';
import photo9 from '../assets/teamphotos/photo9.jpeg';
import photo10 from '../assets/teamphotos/photo10.jpeg';
import photo11 from '../assets/teamphotos/photo11.jpeg';
import photo12 from '../assets/teamphotos/photo12.jpeg';
import photo13 from '../assets/teamphotos/photo13.jpeg';
import photo14 from '../assets/teamphotos/photo14.jpeg';
import photo15 from '../assets/teamphotos/photo15.jpeg';
import photo16 from '../assets/teamphotos/photo16.jpeg';
import photo17 from '../assets/teamphotos/photo17.jpeg';
import photo18 from '../assets/teamphotos/photo18.jpeg';
import photo19 from '../assets/teamphotos/photo19.jpeg';
import photo20 from '../assets/teamphotos/photo20.jpeg';
import photo21 from '../assets/teamphotos/photo21.jpeg';
import photo22 from '../assets/teamphotos/photo22.jpeg';
import photo23 from '../assets/teamphotos/photo23.jpeg';
import photo24 from '../assets/teamphotos/photo24.jpeg';
import photo25 from '../assets/teamphotos/photo25.jpeg';
import photo26 from '../assets/teamphotos/photo26.jpeg';
import photo27 from '../assets/teamphotos/photo27.jpeg';
import photo28 from '../assets/teamphotos/photo28.jpeg';
import photo29 from '../assets/teamphotos/photo29.jpeg';
import photo30 from '../assets/teamphotos/photo30.jpeg';
import photo31 from '../assets/teamphotos/photo31.jpeg';

function AboutPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/services');
  };

  const teamMembers = [
    { name: 'Pula Moore', role: 'Project Manager', photo: photo1 },
    { name: 'Mathew Horton', role: 'CEO', photo: photo2 },
    { name: 'Benjamin Wickham', role: 'Co-Founder', photo: photo3 },
    { name: 'Nancy Smith', role: 'COO', photo: photo4 },
    { name: 'Jeanne Hernandez', role: 'Account Manager', photo: photo5 },
    { name: 'Noel Lawson', role: 'Creative Director', photo: photo6 },
    { name: 'Aileen Washburn', role: 'UI/UX Designer', photo: photo7 },
    { name: 'Ruth Adams', role: 'UI/UX Designer', photo: photo8 },
    { name: 'Netttie Caroll', role: 'Graphic Designer', photo: photo9 },
    { name: 'Keith Thacker', role: 'Graphic Designer', photo: photo10 },
    { name: 'Richard Remer', role: 'Graphic Designer', photo: photo11 },
    { name: 'Richard Pettie', role: 'Interaction Designer', photo: photo12 },
    { name: 'Danie Layne', role: 'Interaction Designer', photo: photo13 },
    { name: 'Billy Stallard', role: 'Interaction Designer', photo: photo14 },
    { name: 'Jeniffer Howard', role: 'UI/UX Designer', photo: photo15 },
    { name: 'Gary Cramer', role: 'Front-End Developer', photo: photo16 },
    { name: 'Leonard Rodriguez', role: 'Front-End Developer', photo: photo17 },
    { name: 'Amy Duet', role: 'Front-End Developer', photo: photo18 },
    { name: 'Vivian White', role: 'Front-End Developer', photo: photo19 },
    { name: 'Jonathan Knight', role: 'Back-End Developer', photo: photo20 },
    { name: 'Hans Tran', role: 'Back-End Developer', photo: photo21 },
    { name: 'Bradley Cockrell', role: 'Back-End Developer', photo: photo22 },
    { name: 'Danuta Sams', role: 'Back-End Developer', photo: photo23 },
    { name: 'Pauline Poirier', role: 'Back-End Developer', photo: photo24 },
    { name: 'Howard Verdugo', role: 'Full-Stack Developer', photo: photo25 },
    { name: 'Todd Rodriguez', role: 'Full-Stack Developer', photo: photo26 },
    { name: 'Mable Dewey', role: 'Full-Stack Developer', photo: photo27 },
    { name: 'Ronald Pena', role: 'DevOps Engineer', photo: photo28 },
    { name: 'Jerry Ellis', role: 'DevOps Engineer', photo: photo29 },
    { name: 'Michael Bishop', role: 'Content Strategist', photo: photo30 },
    { name: 'Ernestine Hayes', role: 'SEO Specialist', photo: photo31 },
    { name: 'Carol Hatfield', role: 'HR Manager', photo: photo31 },
  ];

  return (
    <div className=" font-sans about-page pt-20 text-black p-6 flex justify-center items-center">
      <div className="container m-4">
        <h2 className='text-4xl  text-center text-blue-700 font-semibold mb-8'>About CustomGlide</h2>
        <p className='w-full  text-center text-xl'>CustomGlide is a leading web design and development agency committed to bringing your digital vision to life. With 10+ years of experience, our team of experts specializes in creating responsive, user-friendly, and visually captivating websites that drive results.</p>
        
        <div className="story-section my-8">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 text-center mb-4"> Our Story</h3>
          <p className="text-lg text-center">Founded in 2012, CustomGlide started as a small team of passionate developers and designers who wanted to make a difference in the digital world. Over the years, we have grown into a full-service digital agency with a diverse team of experts. Our journey has been fueled by our commitment to quality, innovation, and customer satisfaction.</p>
        </div> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-center md:space-x-12 space-y-8">
          {/* Mission Section */}
          <div className="mission-section bg-gray-200 p-6  rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl">
            <h3 className="text-lg  text-blue-700 md:text-xl font-semibold mb-4">Our Mission</h3>
            <p>Our mission is to empower businesses through innovative web solutions. We believe in the power of technology to transform businesses and improve lives. By leveraging the latest technologies and industry best practices, we aim to deliver solutions that not only meet but exceed our clients’ expectations.</p>
          </div>

          {/* Vision Section */}
          <div className="vision-section bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl">
            <h3 className="text-lg text-blue-700 md:text-xl font-semibold mb-4">Our Vision</h3>
            <p>Our vision is to be the go-to partner for all your digital needs. We aspire to be recognized as a leader in web design and development, known for our creativity, technical expertise, and commitment to excellence.</p>
          </div>

          {/* Values Section */}
          <div className="values-section bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl">
            <h3 className="text-lg text-blue-700 md:text-xl font-semibold mb-4">Our Values</h3>
            <ol className="text-start list-inside">
              <li className="mb-2"><p className="font-semibold text-blue-700">Quality</p> We are committed to delivering the highest quality in everything we do.</li>
              <li className="mb-2"><p className="font-semibold text-blue-700">Innovation</p> We constantly seek new and better ways to serve our clients.</li>
              <li className="mb-2"><p className="font-semibold text-blue-700">Customer Satisfaction</p> Our clients’ success is our success.</li>
            </ol>
          </div>
        </div>

        <div className="team-section mb-8">
          <h3 className="text-xl md:text-2xl text-center text-blue-700 font-semibold mb-4">Meet the Team</h3>
          <p className='text-center'>Our team is our greatest asset. We are a group of talented and dedicated professionals with a shared passion for technology and design. From our project managers and developers to our designers and support staff, everyone at CustomGlide is committed to providing the best possible service to our clients.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member text-center p-4 bg-white shadow-md rounded-lg">
                <img src={member.photo} alt={member.name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-2">
                  <h4 className="text-lg  text-blue-800 font-semibold">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section text-center">
          <button onClick={handleClick} className="explore-services-btn bg-orange-600   text-white hover:text-white hover:bg-blue-800 text-white py-2 px-4 rounded-md">Explore Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;