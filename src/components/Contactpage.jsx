import React, { useState } from 'react';
import { Navbar } from './Navbar';
import emailjs from 'emailjs-com';
import { Hello } from './Hello';

export const Contactpage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); 

    const templateParams = {
      from_email: email,
      subject: subject,
      message: message,
    };
    let emailSent = false;

    emailjs.send('service_a1wo2tj', 'template_7ocxefp', templateParams, 'D4XeibReFY-9dz4TY')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        emailSent = true; 

        setSuccessMessage('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');

        setTimeout(() => {
          setSuccessMessage(''); 
        }, 3000);
      })
      .catch((error) => {
        // console.error('Failed to send email.', error);
        setErrorMessage('Failed to send message. Please try again.'); 
      });

    setTimeout(() => {
      if (!emailSent) {
        setErrorMessage('Email sending is taking longer than expected. Please check your connection and try again.'); 
      }
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <section className="bg-white ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

            {successMessage && (
              <p className="text-center text-blue-600 font-medium mb-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-center text-red-600 font-medium mb-4">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="example@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Let us know how we can help you" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Write your message here..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div>
        <Hello></Hello>
      </div>
    </>
  );
};

export default Contactpage;