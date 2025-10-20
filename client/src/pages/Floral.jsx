import React from 'react'
import { Link } from 'react-router-dom'

const Floral = () => {
  const floralItems = [
    {
      _id: 'fl1',
      name: 'Premium Centerpiece Arrangement',
      category: 'floral',
      description: 'Elegant floral centerpiece featuring seasonal flowers, perfect for reception tables. Available in various color schemes.',
      images: ['/images/floral/f1.jpeg'],
      features: ['Seasonal Flowers', 'Elegant Design', 'Multiple Colors', 'Fresh Quality'],
      inStock: true,
    },
    {
      _id: 'fl2',
      name: 'Ceremony Floral Arch',
      category: 'floral',
      description: 'Stunning floral arch perfect for wedding ceremonies. Can be customized with your choice of flowers and greenery.',
      images: ['/images/floral/f2.jpeg'],
      features: ['Custom Design', 'Sturdy Structure', 'Fresh Flowers', 'Professional Setup'],
      inStock: true,
    },
    {
      _id: 'fl3',
      name: 'Bridal Bouquet',
      category: 'floral',
      description: 'Beautiful bridal bouquet crafted with premium flowers. Consultation available for custom designs.',
      images: ['/images/floral/f3.jpeg'],
      features: ['Premium Flowers', 'Custom Design', 'Elegant Wrap', 'Fresh Cut'],
      inStock: true,
    },
    {
      _id: 'fl4',
      name: 'Aisle Marker Arrangements',
      category: 'floral',
      description: 'Floral arrangements for ceremony aisles. Perfect for pew ends or free-standing displays.',
      images: ['/images/floral/f4.jpeg'],
      features: ['Easy Installation', 'Multiple Styles', 'Fresh Flowers', 'Secure Mounting'],
      inStock: true,
    },
    {
      _id: 'fl5',
      name: 'Sweetheart Table Garland',
      category: 'floral',
      description: 'Beautiful floral garland for sweetheart tables or head tables. Adds romance to your special table.',
      images: ['/images/floral/f5.jpeg'],
      features: ['Flexible Length', 'Fresh Greenery', 'Mixed Blooms', 'Easy Setup'],
      inStock: true,
    },
    {
      _id: 'fl6',
      name: 'Boutonniere Set',
      category: 'floral',
      description: 'Matching boutonnieres for groom and groomsmen. Coordinates with bridal bouquet.',
      images: ['/images/floral/f6.jpeg'],
      features: ['Fresh Flowers', 'Secure Pins', 'Matching Set', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: 'fl7',
      name: 'Boutonniere Set',
      category: 'floral',
      description: 'Matching boutonnieres for groom and groomsmen. Coordinates with bridal bouquet.',
      images: ['/images/floral/f7.jpeg'],
      features: ['Fresh Flowers', 'Secure Pins', 'Matching Set', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: 'fl8',
      name: 'Boutonniere Set',
      category: 'floral',
      description: 'Matching boutonnieres for groom and groomsmen. Coordinates with bridal bouquet.',
      images: ['/images/floral/f8.jpeg'],
      features: ['Fresh Flowers', 'Secure Pins', 'Matching Set', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: 'fl9',
      name: 'Boutonniere Set',
      category: 'floral',
      description: 'Matching boutonnieres for groom and groomsmen. Coordinates with bridal bouquet.',
      images: ['/images/floral/f9.jpeg'],
      features: ['Fresh Flowers', 'Secure Pins', 'Matching Set', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: 'fl10',
      name: 'Boutonniere Set',
      category: 'floral',
      description: 'Matching boutonnieres for groom and groomsmen. Coordinates with bridal bouquet.',
      images: ['/images/floral/f10.jpeg'],
      features: ['Fresh Flowers', 'Secure Pins', 'Matching Set', 'Elegant Design'],
      inStock: true,
    },
    {
      _id: 'fl11',
      name: 'Boutonniere Set',
      category: 'floral',
      description: 'Matching boutonnieres for groom and groomsmen. Coordinates with bridal bouquet.',
      images: ['/images/floral/f11.jpeg'],
      features: ['Fresh Flowers', 'Secure Pins', 'Matching Set', 'Elegant Design'],
      inStock: true,
    },
  ]

  const floralServices = [
    {
      name: 'Custom Design Consultation',
      description: 'Work with our floral designers to create the perfect arrangements for your event.',
      icon: '💐'
    },
    {
      name: 'Delivery & Setup',
      description: 'Professional delivery and setup of all floral arrangements at your venue.',
      icon: '🚚'
    },
    {
      name: 'Premium Artificial Selection',
      description: 'High-quality silk and artificial flowers that look incredibly realistic.',
      icon: '🌷'
    },
    {
      name: 'Color Coordination',
      description: 'Perfect color matching to complement your event theme and decor.',
      icon: '🎨'
    }
  ]

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Floral & Decor Rentals
          </h1>
          <p className="text-xl text-light-brown max-w-3xl mx-auto">
            Transform your event with our exquisite floral arrangements and decorative elements. 
            From intimate gatherings to grand celebrations, we create beautiful moments with flowers.
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Our Floral Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {floralServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-navy-blue mb-2">
                  {service.name}
                </h3>
                <p className="text-light-brown text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Floral Items - Images Only */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-blue text-center mb-8">
            Available Floral Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floralItems.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-blue mb-4">
            Ready to Design Your Floral Vision?
          </h2>
          <p className="text-light-brown mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our floral designers to create custom arrangements 
            that perfectly match your event theme and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+19098489364"
              className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all"
            >
              Call: (909) 848-9364
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Floral