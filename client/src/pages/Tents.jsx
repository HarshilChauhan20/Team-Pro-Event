import React from 'react'
import { Link } from 'react-router-dom'

const Tents = () => {
  const tents = [
    {
      _id: '1',
      name: 'Frame Tent 20x30',
      images: ['https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '2',
      name: 'Frame Tent 30x40',
      images: ['https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '3',
      name: 'Pole Tent 30x40',
      images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '4',
      name: 'Pole Tent 40x60',
      images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '5',
      name: 'Sailcloth Tent 30x30',
      images: ['https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: '6',
      name: 'Clear Top Tent 20x20',
      images: ['https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    },
  ]

  const tentTypes = [
    {
      name: 'Frame Tents',
      image: 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Pole Tents',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Specialty Tents',
      image: 'https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ]

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Event Tents & Canopies
          </h1>
        </div>

        {/* Tent Types Overview - Only Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Tent Styles & Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
            {tents.map((tent) => (
              <div key={tent._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={tent.images[0]} 
                  alt={tent.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Available Tents - Only Images */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Available Tents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tents.map((tent) => (
              <div key={tent._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={tent.images[0]} 
                  alt={tent.name}
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

export default Tents