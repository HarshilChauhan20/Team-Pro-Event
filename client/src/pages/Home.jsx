import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const Home = () => {
  // Sample featured products - in real app, this would come from API
  const featuredProducts = [
    {
      _id: '1',
      name: '60-inch Round Table',
      category: 'tables',
      description: 'Elegant round table perfect for wedding receptions and formal events. Seats 8-10 guests comfortably.',
      images: ['/images/tables/Table.jpg'],
      features: ['Sturdy Construction', 'Easy Setup', 'Elegant Finish'],
      inStock: true,
    },
    {
      _id: '2',
      name: 'White Chiavari Chair',
      category: 'chairs',
      description: 'Premium Chiavari chairs offering timeless elegance and superior comfort for your guests.',
      images: ['/images/chairs/Chairr.jpeg'],
      features: ['Premium Quality', 'Comfortable', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: '3',
      name: 'Frame Tent ',
      category: 'tents',
      description: 'Spacious frame tent suitable for medium to large events. Weather-resistant and versatile.',
      images: ['/images/tents/Tent.jpeg'],
      features: ['Weather Resistant', 'Spacious', 'Easy Setup'],
      inStock: true,
    },
  ]

  return (
    <div>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl font-serif font-bold text-navy-blue mb-4">
              Featured Rentals
            </h2>
            <p className="text-xl text-light-brown max-w-2xl mx-auto">
              Discover our premium collection of event essentials that transform ordinary spaces into extraordinary venues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border-2 border-navy-blue text-navy-blue font-semibold rounded-lg hover:bg-navy-blue hover:text-white transition-all duration-200"
            >
              View All Products
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section - Updated to open gallery pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl font-serif font-bold text-navy-blue mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-light-brown">
              Everything you need for a perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tables - Opens tables gallery */}
            <Link
              to="/Gallery"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-80 bg-cover bg-center" style={{backgroundImage: 'url("/images/tables/Table-2.jpeg")'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-serif font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    Tables
                  </h3>
                </div>
              </div>
            </Link>

            {/* Chairs - Opens chairs gallery */}
            <Link
              to="/Gallery"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-80 bg-cover bg-center" style={{backgroundImage: 'url("/images/chairs/Chair-2.jpeg")'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-serif font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    Chairs
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tents - Opens tents gallery */}
            <Link
              to="/Gallery"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-80 bg-cover bg-center" style={{backgroundImage: 'url("/images/tents/Tent-2.jpeg")'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-serif font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    Tents
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Floral & Decor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl font-serif font-bold text-navy-blue mb-4">
              Floral & Decor Rentals
            </h2>
            <p className="text-xl text-light-brown max-w-2xl mx-auto">
              Enhance your event with our beautiful floral arrangements and decorative elements. 
              Perfect for adding that special touch to your celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Floral Item 1 */}
            <div className="bg-cream rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-navy-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-blue mb-2">
                Centerpiece Arrangements
              </h3>
              <p className="text-light-brown mb-4">
                Elegant floral centerpieces for tables, available in various styles and colors.
              </p>
            </div>

            {/* Floral Item 2 */}
            <div className="bg-cream rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-navy-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-blue mb-2">
                Ceremony Arches
              </h3>
              <p className="text-light-brown mb-4">
                Beautiful floral arches perfect for wedding ceremonies and photo backdrops.
              </p>
            </div>

            {/* Floral Item 3 */}
            <div className="bg-cream rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-navy-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-blue mb-2">
                Aisle Decor
              </h3>
              <p className="text-light-brown mb-4">
                Floral arrangements for ceremony aisles, including pew ends and aisle markers.
              </p>
            </div>

            {/* Floral Item 4 */}
            <div className="bg-cream rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-navy-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-blue mb-2">
                Bouquets & Boutonnieres
              </h3>
              <p className="text-light-brown mb-4">
                Bridal bouquets, bridesmaid bouquets, and matching boutonnieres.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="bg-light-pink text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-light-pink/80 transition-colors inline-flex items-center space-x-2"
            >
              <span>Inquire About Floral Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-xl text-cream mb-8">
            Let us help you bring your vision to life with our premium event rentals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+1 (909) 848-9364"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-blue transition-all duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home