// const Contact = () => {
//   return (
//     <>
//       <h1>Contact Me</h1>
//       import React, { useState } from 'react';
// import './ContactForm.css'; // You can create this CSS file for styling

//////////////////

import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('Ali');
    setEmail('abc@gmail.com');
    setMessage('hello world');
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

//export default ContactForm;

//     </>
//   );
// };

export default Contact;
