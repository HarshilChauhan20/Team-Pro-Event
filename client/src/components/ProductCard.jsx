import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0] || '/images/placeholder.jpg'}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-navy-blue mb-2">
          {product.name}
        </h3>
        <p className="text-light-brown mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-navy-blue">
            ${product.price}
            <span className="text-sm text-light-brown font-normal"> / day</span>
          </span>
        </div> */}

        <div className="flex flex-wrap gap-2 mb-4">
          {product.features?.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-light-pink text-light-brown px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        <Link
          to={`/contact?product=${product._id}`}
          className={`w-full text-center block ${
            product.inStock
              ? 'bg-navy-blue hover:bg-navy-blue/90 text-white'
              : 'bg-gray-400 cursor-not-allowed text-gray-200'
          } py-2 px-4 rounded-lg font-semibold transition-colors duration-200`}
        >
          {product.inStock ? 'Inquire Now' : 'Unavailable'}
        </Link>
      </div>
    </div>
  )
}

export default ProductCard