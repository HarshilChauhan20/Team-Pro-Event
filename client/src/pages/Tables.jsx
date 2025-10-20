import React from 'react'
import { Link } from 'react-router-dom'

const Tables = () => {
  const tables = [
    {
      _id: '1',
      name: '60-inch Round Table',
      images: ['/images/tables/Table.jpg'],
    },
    {
      _id: '2',
      name: '6-foot Rectangular Table',
      images: ['/images/tables/Table.jpg'],
    },
    {
      _id: '3',
      name: '8-foot Banquet Table',
      images: ['/images/tables/Table.jpg'],
    },
    {
      _id: '4',
      name: '48-inch Round Table',
      images: ['/images/tables/Table.jpg'],
    },
    {
      _id: '5',
      name: 'Cocktail Table (High Top)',
      images: ['/images/tables/Table.jpg'],
    },
    {
      _id: '6',
      name: 'Sweetheart Table',
      images: ['/images/tables/Table.jpg'],
    },
  ]

  const tableTypes = [
    {
      name: 'Round Tables',
      image: '/images/tables/Table.jpg'
    },
    {
      name: 'Rectangular Tables',
      image: '/images/tables/Table.jpg'
    },
    {
      name: 'Specialty Tables',
      image: '/images/tables/Table.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Event Tables
          </h1>
        </div>

        {/* Table Types Overview - Only Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Table Styles & Configurations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tableTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-96 bg-cover bg-center" style={{backgroundImage: `url(${type.image})`}}></div>
              </div>
              
            ))}
            {tables.map((table) => (
              <div key={table._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-80 bg-cover bg-center" style={{backgroundImage: `url(${table.images[0]})`}}></div>
              </div>
            ))}
          </div>
        </section>

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
              to="/chairs"
              className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all"
            >
              View Chairs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tables