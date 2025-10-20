import React from 'react'
import { Link } from 'react-router-dom'

const Chairs = () => {
  const chairs = [
    {
      _id: '1',
      name: 'White Wooden Resin Chair',
      images: ['https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '2',
      name: 'Chiavari Chair - Gold',
      images: ['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '3',
      name: 'Chiavari Chair - Silver',
      images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '4',
      name: 'Chiavari Chair - White',
      images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '5',
      name: 'Folding Chair - White',
      images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '6',
      name: 'Cross Back Chair - Natural',
      images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
  ]

  const chairTypes = [
    {
      name: 'Chiavari Chairs',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Resin Chairs',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Specialty Chairs',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ]

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Event Chairs
          </h1>
        </div>

        {/* Chair Types Overview - Only Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Chair Styles & Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chairTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
            {chairs.map((chair) => (
              <div key={chair._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={chair.images[0]} 
                  alt={chair.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Available Chairs - Only Images */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Available Chairs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chairs.map((chair) => (
              <div key={chair._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={chair.images[0]} 
                  alt={chair.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA Section - Keep minimal */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
            >
              Get a Custom Quote
            </Link>
            <Link
              to="/tables"
              className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all"
            >
              View Tables
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chairs