import React from 'react'

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: ['+1 (909) 848-9364', '+1 (909) 555-1234'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: ['sales@teamproevents.com', 'info@teamproevents.com'],
      description: 'We respond within 24 hours'
    }
  ]

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-light-brown max-w-3xl mx-auto">
            Ready to start planning your perfect event? Contact us today for personalized service 
            and expert guidance on making your occasion truly memorable.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-navy-blue mb-8 text-center">
            Contact Information
          </h2>
          
          <div className="space-y-8 mb-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-light-pink rounded-full flex items-center justify-center text-navy-blue flex-shrink-0">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy-blue mb-2 text-lg">
                    {method.title}
                  </h3>
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-light-brown text-base mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-light-brown text-sm mt-2">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Section */}
          <div className="border-t border-light-brown/20 pt-8 text-center">
            <h3 className="font-semibold text-navy-blue mb-6 text-xl">
              Follow Us on Instagram
            </h3>
            <div className="flex flex-col items-center space-y-4">
              {/* Instagram Logo with Gradient */}
              <a 
                href="https://www.instagram.com/team_pro_events?igsh=cm5hNXc0YTdodXN0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" fill="currentColor"/>
                    <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.5a3.635 3.635 0 100 7.27 3.635 3.635 0 000-7.27z" fill="currentColor"/>
                    <circle cx="17.625" cy="6.375" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
              </a>
              
              <div>
                <p className="text-light-brown mb-2">
                  Follow us for event inspiration and behind-the-scenes content
                </p>
                <p className="text-navy-blue font-semibold text-lg">
                  @TeamProEvents
                </p>
              </div>
              
              <a 
                href="https://www.instagram.com/team_pro_events?igsh=cm5hNXc0YTdodXN0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact