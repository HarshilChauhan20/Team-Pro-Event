import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
// Remove axios import for now
// import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(false) // Set to false since we're using sample data

  useEffect(() => {
    // Use sample data instead of API call for now
    setProducts(getSampleProducts())
    setFilteredProducts(getSampleProducts())
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    }
  }, [selectedCategory, products])

  const getSampleProducts = () => [
    {
      _id: '1',
      name: '60-inch Round Table',
      category: 'tables',
      description: 'Elegant round table perfect for wedding receptions and formal events. Seats 8-10 guests comfortably.',
      price: 45,
      images: ['/images/tables/round-table.jpg'],
      features: ['Sturdy Construction', 'Easy Setup', 'Elegant Finish'],
      inStock: true,
    },
    {
      _id: '2',
      name: '6-foot Rectangular Table',
      category: 'tables',
      description: 'Versatile rectangular table ideal for buffet setups, registration areas, and dining.',
      price: 35,
      images: ['/images/tables/rectangular-table.jpg'],
      features: ['Versatile', 'Durable', 'Space Efficient'],
      inStock: true,
    },
    {
      _id: '3',
      name: 'White Wooden Resin Chair',
      category: 'chairs',
      description: 'Durable and classic white resin chairs that combine elegance with practicality.',
      price: 8,
      images: ['/images/chairs/wooden-resin-chair.jpg'],
      features: ['Weather Resistant', 'Stackable', 'Comfortable'],
      inStock: true,
    },
    {
      _id: '4',
      name: 'Chiavari Chair',
      category: 'chairs',
      description: 'Premium Chiavari chairs offering timeless elegance and superior comfort for your guests.',
      price: 12,
      images: ['/images/chairs/chiavari-chair.jpg'],
      features: ['Premium Quality', 'Comfortable', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: '5',
      name: 'Frame Tent 20x30',
      category: 'tents',
      description: 'Spacious frame tent suitable for medium to large events. Weather-resistant and versatile.',
      price: 350,
      images: ['/images/tents/frame-tent-20x30.jpg'],
      features: ['Weather Resistant', 'Spacious', 'Easy Setup'],
      inStock: true,
    },
    {
      _id: '6',
      name: 'Pole Tent 30x40',
      category: 'tents',
      description: 'Traditional pole tent with elegant peaks, perfect for weddings and outdoor celebrations.',
      price: 450,
      images: ['/images/tents/pole-tent-30x40.jpg'],
      features: ['Traditional Style', 'Elegant Peaks', 'Large Capacity'],
      inStock: true,
    },
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tables', name: 'Tables' },
    { id: 'chairs', name: 'Chairs' },
    { id: 'tents', name: 'Tents' },
  ]

  // Remove the loading spinner since we're using immediate sample data
  // if (loading) { ... }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Our Rental Collection
          </h1>
          <p className="text-xl text-light-brown max-w-3xl mx-auto">
            Discover our comprehensive range of premium event rentals designed to make your occasion unforgettable
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-navy-blue text-white shadow-lg'
                  : 'bg-white text-light-brown hover:bg-navy-blue hover:text-white shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-light-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-navy-blue mb-2">
              No Products Found
            </h3>
            <p className="text-light-brown mb-6">
              We couldn't find any products in this category.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="bg-navy-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-blue mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-light-brown mb-6 max-w-2xl mx-auto">
            We're constantly expanding our inventory. Contact us with your specific requirements, and we'll help you find the perfect rental solutions for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products