import React from 'react';

const Contact = () => {
  return (
    <div className=" font-sans text-blue-900 py-12 pt-20 mx-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="bg-gray-400 p-6 rounded-lg space-y-4">
              <div>
                <label className="block text-sm text-blue-700 font-medium mb-1" htmlFor="name">Name</label>
                <input className="w-full p-2 bg-gray-100 text-black rounded" type="text" id="name" />
              </div>
              <div>
                <label className="block text-sm text-blue-700 font-medium mb-1" htmlFor="email">Email</label>
                <input className="w-full p-2 bg-gray-100 text-black rounded" type="email" id="email" />
              </div>
              <div>
                <label className="block text-sm text-blue-700 font-medium mb-1" htmlFor="message">Message</label>
                <textarea className="w-full p-2 bg-gray-100 text-black rounded" id="message" rows="4"></textarea>
              </div>
              <button className="bg-orange-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl text-gray-900 font-bold mb-4">Contact Information</h3>
            <p className="mb-4">You can reach us at:</p>
            <p className="mb-2"><strong>Email:</strong> support@hopetech.com</p>
            <p className="mb-2"><strong>Phone:</strong> Let's Talk! +1 (774) 393-2824</p>
            <p className="mb-4"><strong>Address:</strong> 144 North Rd, Sudbury, MA 01776</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
