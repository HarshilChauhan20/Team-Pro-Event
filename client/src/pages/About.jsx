import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With over 15 years in the event industry, Sarah founded Team Pro Events with a vision to provide exceptional rental experiences.',
      image: '/images/team/sarah-johnson.jpg',
      specialties: ['Event Planning', 'Client Relations', 'Business Strategy']
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      bio: 'Michael ensures every event runs smoothly with his meticulous attention to detail and logistics expertise.',
      image: '/images/team/michael-chen.jpg',
      specialties: ['Logistics', 'Inventory Management', 'Team Coordination']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Emily brings artistic vision to every event, creating stunning setups that exceed client expectations.',
      image: '/images/team/emily-rodriguez.jpg',
      specialties: ['Design Concepts', 'Style Coordination', 'Visual Merchandising']
    },
    {
      name: 'David Thompson',
      role: 'Installation Supervisor',
      bio: 'David leads our installation team with precision and care, ensuring perfect setup for every event.',
      image: '/images/team/david-thompson.jpg',
      specialties: ['Tent Installation', 'Site Management', 'Safety Protocols']
    },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every detail, from product quality to customer service.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We work collaboratively with our clients to bring their vision to life.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously evolve our offerings and services to meet changing event needs.'
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      description: 'Clients trust us to deliver exactly what we promise, when we promise it.'
    },
  ]

  const milestones = [
    {
      year: '2015',
      event: 'Company Founded',
      description: 'Started with a small inventory of tables and chairs'
    },
    {
      year: '2017',
      event: 'Tent Division Launched',
      description: 'Expanded to include full tent and canopy services'
    },
    {
      year: '2019',
      event: 'Award Winning',
      description: 'Received "Best Event Rental Company" local award'
    },
    {
      year: '2022',
      event: 'Major Expansion',
      description: 'Doubled warehouse space and inventory capacity'
    },
    {
      year: '2024',
      event: 'Digital Transformation',
      description: 'Launched new website and online booking system'
    },
  ]

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            About Team Pro Events
          </h1>
          <p className="text-xl text-light-brown max-w-3xl mx-auto">
            For nearly a decade, we've been turning moments into memories by providing exceptional 
            event rental services that create the perfect backdrop for life's most cherished occasions.
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-navy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-navy-blue mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-light-brown italic mb-6">
              "Turning moments into memories"
            </p>
            <p className="text-lg text-light-brown">
              We believe that every event, whether an intimate gathering or a grand celebration, 
              deserves a perfect setting. Our mission is to provide exceptional event rental items 
              and services that create the ideal backdrop for our clients' most cherished occasions. 
              We're committed to quality, reliability, and creating experiences that last a lifetime.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-light-brown">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-navy-blue text-white rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-cream">Events Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-cream">Tent Setups</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-cream">Chairs Rented</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-cream">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-blue mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-light-brown mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted Team Pro Events to make their special occasions unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
            >
              Start Your Event Planning
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all"
            >
              Call Our Team: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About