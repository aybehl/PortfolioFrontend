import React from 'react';
import { useState } from 'react';

export default function ContactMe() {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ errors, setErrors ] = useState({});
  const [ apiResponse, setApiResponse ] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(e.target);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if(!formData.name){
      formErrors.name = "Name is required";
    }

    if(!formData.email){
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    setErrors({});
    e.preventDefault();

    const formErrors = validateForm();
    
    if(Object.keys(formErrors).length === 0){
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

      try {
        const response = await fetch(`${BACKEND_URL}/contacts/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if(response.ok){
          setApiResponse('Form submitted successfully');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setApiResponse('Form submission failed');
        }
      } catch(error){
        console.error(`Error occurred in POST request to submit contact form - ${error.message}`);
        setApiResponse('An error occurred while submitting the form');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <section
        className="flex flex-col items-center justify-center text-[1rem] py-[2.5rem] md:pt-[5rem] md:pb-[5.25rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/contact-section/contact-section-background-image.jpeg')" }}
      >

        <div className="relative md:text-[2rem] xs:text-[1rem] font-semibold mb-[2rem] text-shade-of-white font-serif xs:mb-[1.25rem]">
          Contact Me<span className="text-shade-of-lighter-purple">.</span>
          <div className="absolute bottom-[-2px] left-0 w-full h-[0.125rem] bg-shade-of-lighter-purple rounded-md md:bottom-[-4px]" />
        </div>
        <div className="hidden md:text-[1.5rem] xs:text-[0.75rem] font-semibold text-shade-of-white text-center md:mb-[4rem] xs:mb-[2.75rem] xs:w-[70%] xs:block">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible
        </div>

        <div className="md:border-4 border-shade-of-white rounded-[0.25rem] md:p-[2rem] bg-shade-of-dark-blue md:w-[40%] border-[0.0625rem] p-[0.5rem] w-[80%] xs:w-[60%] xs:p-[1rem] xs:border-[0.125rem]">
          <form onSubmit={handleSubmit}>
            <div className="md:mb-[2rem] mb-[1rem]">
              <label htmlFor="name" className="font-semibold md:text-[1.25rem] text-shade-of-white text-[0.75rem]">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Your Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-[0.25rem] md:p-[1.5rem] md:pr-[5rem] md:mt-[0.75rem] cursor-text text-shade-of-purple md:text-[1.25rem] md:focus:border-[4px] focus:border-shade-of-lighter-purple focus:outline-none text-[0.75rem] p-[0.75rem] pr-[2.5rem] mt-[0.5rem] focus:border-[2px]" />
                { errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p> }
            </div>
            <div className="md:mb-[2rem] mb-[1rem]">
              <label htmlFor="email" className="font-semibold md:text-[1.25rem] text-shade-of-white text-[0.75rem]">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter Your Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-[0.25rem] md:p-[1.5rem] md:pr-[5rem] md:mt-[0.75rem] cursor-text text-shade-of-purple md:text-[1.25rem] md:focus:border-[4px] focus:border-shade-of-lighter-purple focus:outline-none text-[0.75rem] p-[0.75rem] pr-[2.5rem] mt-[0.5rem] focus:border-[2px]" />
                { errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p> }
            </div>
            <div className="md:mb-[2rem] mb-[1rem]">
              <label htmlFor="message" className="font-semibold md:text-[1.25rem] text-shade-of-white text-[0.75rem]">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-[0.25rem] md:p-[1.5rem] md:pr-[5rem] md:pb-[5rem] md:mt-[0.75rem] cursor-text text-shade-of-purple md:text-[1.25rem] md:focus:border-[4px] focus:border-shade-of-lighter-purple focus:outline-none text-[0.75rem] p-[0.75rem] pr-[2.5rem] pb-[2.5rem] mt-[0.5rem] focus:border-[2px]" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-shade-of-purple text-shade-of-white md:py-[1rem] md:px-[2rem] rounded-[0.25rem] uppercase md:text-[1.25rem] font-semibold border border-[#484646] py-[0.5rem] px-[1rem] text-[0.75rem]">
                Submit
              </button>
            </div>
          </form>
          { apiResponse && <div className="mt-4 text-center text-shade-of-white">{apiResponse}</div>}
        </div>
      </section>
    </div>
  );
}
