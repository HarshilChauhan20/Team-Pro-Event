import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center parallax"
      style={{
        backgroundImage: 'url("/images/hero-banner.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-shadow">
          Turning Moments into Memories
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto">
          Exceptional event rental items and services for your most cherished occasions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors duration-200 transform hover:scale-105"
          >
            View Our Products
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-blue transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero