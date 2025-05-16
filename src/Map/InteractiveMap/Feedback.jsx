import { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    like: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.contactNumber && !/^[0-9+\- ]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            like: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="h-auto bg-[#f8f9fa] py-16 px-5 sm:px-6 lg:px-8">
      <div className='flex md:justify-evenly justify-center items-center flex-wrap gap-8'>
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="md:text-4xl text-3xl text-black font-droid mb-3">QUICK FEEDBACK</h2>
          </div>
          
          {submitSuccess ? (
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-green-100">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg ">
                <strong className="font-bold">Thank you!</strong>
                <span className="ml-2">Your feedback has been submitted successfully.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - form fields */}
                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full bg-white border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-[#9a1d20]'} text-black placeholder-transparent focus:outline-none rounded-md px-4 py-3 transition-colors`}
                      />
                      <label 
                        htmlFor="firstName" 
                        className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9a1d20]"
                      >
                        First Name *
                      </label>
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full bg-white border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-[#9a1d20]'} text-black placeholder-transparent focus:outline-none rounded-md px-4 py-3 transition-colors`}
                      />
                      <label 
                        htmlFor="lastName" 
                        className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9a1d20]"
                      >
                        Last Name *
                      </label>
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full bg-white border-2 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#9a1d20]'} text-black placeholder-transparent focus:outline-none rounded-md px-4 py-3 transition-colors`}
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9a1d20]"
                    >
                      Email Address *
                    </label>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.like}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full bg-white border-2 ${errors.like ? 'border-red-500' : 'border-gray-300 focus:border-[#9a1d20]'} text-black placeholder-transparent focus:outline-none rounded-md px-4 py-3 transition-colors`}
                    />
                    <label 
                      htmlFor="contactNumber" 
                      className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9a1d20]"
                    >
                      One thing you liked: 
                    </label>
                    {errors.like && <p className="mt-1 text-sm text-red-600">{errors.like}</p>}
                  </div>
                </div>

                {/* Right side - message box */}
                <div className="flex-1">
                  <div className="relative h-full">
                    <textarea
                      id="message"
                      name="message"
                      rows="8"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full h-full bg-white border-2 ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#9a1d20]'} text-black placeholder-transparent focus:outline-none rounded-md px-4 py-3 transition-colors`}
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9a1d20]"
                    >
                      Any thoughts you'd like to share? 
                    </label>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                </div>
              </div>
           
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-40 py-3 px-6 rounded-md font-medium text-white ${isSubmitting ? 'bg-[#9a1d20] cursor-not-allowed' : 'bg-[#9a1d20] hover:bg-[#6f1618]'} transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg `}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit'}
                </button>
              </div>
            </form>
          )}
          
          <div className="md:mt-12 mt-8 text-center text-gray-500 text-sm">
            <p>WE HEAR YOU. WE APPRECIATE YOU.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;