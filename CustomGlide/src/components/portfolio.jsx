// Portfolio.js

import React from 'react';

// Import images from assets folder
import image1 from '../assets/fatjoeimage.jpeg';
import image2 from '../assets/picmonicimage.jpeg';
import image3 from '../assets/msleggalimage.jpeg';
import image4 from '../assets/Forageimage.jpeg';
import image5 from '../assets/marcellaimage.jpeg';
import image6 from '../assets/hometimage.jpeg';
import image7 from '../assets/wordagentsimage.jpeg';

const projects = [
  {
    name: "Fat Joe",
    description: "FATJOE offers a smarter approach to SEO from link building and content creation to digital PR and local SEO, FATJOE simplifies the complexities of digital marketing.",
    image: image1,
    link: "https://fatjoe.com/", // External link
  },
  {
    name: "PicMonic",
    description: "A platform designed to enhance memory retention and improve learning outcomes, Picmonic supports students preparing for critical exams like USMLE Step 1, Step 2 CK, COMLEX, NCLEX®, PANCE, NAPLEX, and MCAT..",
    image: image2,
    link: "https://www.picmonic.com/", // External link
  },
  {
    name: "Msleggal",
    description: "The Law Offices of Michael S. Lamonsoff,  serves as a gateway to exceptional legal services for individuals seeking justice after accidents or injuries. Visitors can explore comprehensive information about their practice areas, team of experienced attorneys, and notable case successes.",
    image: image3,
    link: "https://www.msllegal.com/", // External link
  },
  {
    name: "The Forage",
    description: "A platform where employees and employers meet and serves as an online marketplace for job opportunities.Job seekers can browse listings,apply for positions while job employers post job openings and manage theri hiring process....",
    image: image4,
    link: "https://www.theforage.com/", // External link
  },
  {
    name: "Marcella NY",
    description: "Marcella NYC brings you NYC-designed, European handcrafted designer minimalism within reach. ",
    image: image5,
    link: "https://www.marcellanyc.com/", // External link
  },
  {
    name: "The Home T",
    description: "The Home T-shirt is a stylish way to show your state pride while helping raise money for MS research. It's Made in the USA and is insanely soft! From state pride shirts t...",
    image: image6,
    link: "https://www.thehomet.com/", // External link
  },
  {
    name: "Word Agents",
    description: "SEO content at scale by SEO champs. Engage your readers & keep Google happy with SEO content produced within 7 days...",
    image: image7,
    link: "https://www.wordagents.com/", // External link
  },
];

const Portfolio = () => {
  return (
    <div className="container font-sans mx-auto py-12 pt-32 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Sample Projects | Showcasing Our Best Work</h2>
        <p className="text-lg text-gray-700">At HopeTech, we take pride in our work, and we are excited to showcase some of our best projects. Our portfolio includes a diverse range of projects, from small business websites to large-scale enterprise applications. Each project is a testament to our commitment to quality, innovation, and customer satisfaction.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-2xl  bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-orange-600 flex flex-col justify-between h-full hover:shadow-lg transition duration-300 cursor-pointer">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="h-40 w-full object-cover rounded-t-xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{project.name}</h3>
              <p className="text-lg text-gray-700 mb-4">{project.description}</p>
              <span className="text-orange-600 font-bold hover:underline">Explore</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
