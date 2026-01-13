import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا رح نرسل البيانات للخادم (في التطبيق الحقيقي)
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // إعادة تعيين النموذج
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">123 Event Street<br />Riyadh, Saudi Arabia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+966 12 345 6789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <span className="text-purple-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@eventhub.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <span className="text-orange-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Working Hours</h3>
                      <p className="text-gray-600">Sunday - Thursday<br />9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-500 text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Message Sent Successfully!</h2>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;