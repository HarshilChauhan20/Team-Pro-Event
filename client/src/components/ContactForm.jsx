import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = ({ productId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: '',
    productInterest: productId || ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await axios.post('http://localhost:5000/api/inquiries', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guestCount: '',
        message: '',
        productInterest: productId || ''
      })
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      alert('There was an error submitting your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-serif font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          Your inquiry has been received. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-light-brown mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-light-brown mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-light-brown mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-light-brown mb-2">
            Event Date *
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-light-brown mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="birthday">Birthday Party</option>
            <option value="anniversary">Anniversary</option>
            <option value="graduation">Graduation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-light-brown mb-2">
            Number of Guests *
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            required
            min="1"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
            placeholder="e.g., 100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-light-brown mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-light-brown/30 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-colors duration-200"
          placeholder="Tell us about your event and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy-blue text-white py-4 px-6 rounded-lg font-semibold hover:bg-navy-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </div>
        ) : (
          'Send Inquiry'
        )}
      </button>

      <p className="text-sm text-light-brown text-center">
        We'll get back to you within 24 hours to discuss your event needs.
      </p>
    </form>
  )
}

export default ContactForm