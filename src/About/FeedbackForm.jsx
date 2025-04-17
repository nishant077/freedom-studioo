import { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
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
            contactNumber: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className='flex md:justify-between justify-center items-center flex-wrap'>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl font-bold text-white mb-3">Share Your Thoughts</h2>
          <p className="text-gray-300 md:text-lg text-base">We value your feedback and would love to hear from you</p>
        </div>
        
        {submitSuccess ? (
          <div className="bg-emerald-900/50 border border-emerald-500 text-white px-6 py-4 rounded-lg mb-8 text-center">
            <strong className="font-bold">Thank you!</strong>
            <span className="ml-2">Your feedback has been submitted successfully.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-gray-900 border-0 border-b-2  ${errors.firstName ? 'border-red-500' : 'border-gray-700 focus:border-cyan-400'} text-white placeholder-transparent focus:outline-none focus:ring-0 py-2`}
                />
                <label 
                  htmlFor="firstName" 
                  className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400"
                >
                  First Name *
                </label>
                {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-gray-900 border-0 border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-700 focus:border-cyan-400'} text-white placeholder-transparent focus:outline-none focus:ring-0 py-2 px-0`}
                />
                <label 
                  htmlFor="lastName" 
                  className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400"
                >
                  Last Name *
                </label>
                {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
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
                className={`peer w-full bg-gray-900 border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-cyan-400'} text-white placeholder-transparent focus:outline-none focus:ring-0 py-2 px-0`}
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Email Address *
              </label>
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>
            
            <div className="relative">
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder=" "
                className={`peer w-full bg-gray-900 border-0 border-b-2 ${errors.contactNumber ? 'border-red-500' : 'border-gray-700 focus:border-cyan-400'} text-white placeholder-transparent focus:outline-none focus:ring-0 py-2 px-0`}
              />
              <label 
                htmlFor="contactNumber" 
                className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Contact Number (Optional)
              </label>
              {errors.contactNumber && <p className="mt-1 text-sm text-red-400">{errors.contactNumber}</p>}
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className={`peer w-full bg-gray-900 border-0 border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-700 focus:border-cyan-400'} text-white placeholder-transparent focus:outline-none focus:ring-0 py-2 px-0`}
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Your Message *
              </label>
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white ${isSubmitting ? 'bg-cyan-600/70 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-500'} transition-all duration-200 flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : 'Submit Feedback'}
              </button>
            </div>
          </form>
        )}
        
        <div className="md:mt-12 mt-5 text-center text-gray-500 text-sm">
          <p>We'll get back to you within 24 hours</p>
        </div>
      </div>
      <div className='' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.3608873371442!2d85.33719106993117!3d27.68694690078486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1996a8d615f9%3A0xca3d4207589f4c3b!2sMinbhawan%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1744389136209!5m2!1sen!2snp"  className="md:w-[600px] h-[450px] sm:h-[400px] md:h-[550px] border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
  );
};

export default FeedbackForm;