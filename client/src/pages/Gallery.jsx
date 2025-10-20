import React, { useState } from 'react'
import GalleryComponent from '../components/Gallery'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryImages = [
    // Wedding Events
    {
      src: '/images/gallery/wed-1.png',
      alt: 'Elegant wedding reception setup',
      caption: 'A fairytale beginning under the open sky ✨',
      category: 'wedding',
      tags: ['wedding', 'reception', 'elegant']
    },
    {
      src: '/images/gallery/wed-2.png',
      alt: 'Outdoor wedding ceremony',
      caption: 'A royal walkway leading to a lifetime of love 💍❤️',
      category: 'wedding',
      tags: ['wedding', 'ceremony', 'outdoor']
    },
    {
      src: '/images/gallery/wed-3.png',
      alt: 'Wedding tent setup',
      caption: 'A divine celebration at BAPS Temple, where love bloomed beautifully amidst a sea of flowers 🌸✨',
      category: 'wedding',
      tags: ['wedding', 'tent', 'reception']
    },
    {
      src: '/images/gallery/wed-4.png',
      alt: 'Sweetheart table setup',
      caption: 'Pink, green & endless blossoms — a mandap made for love 💐💖',
      category: 'wedding',
      tags: ['wedding', 'sweetheart', 'decor']
    },
    {
      src: '/images/gallery/wed-5.png',
      alt: 'Sweetheart table setup',
      caption: 'love story of the couple, the atmosphere of the celebration, and the special moments that make the day beautiful🌸💖',
      category: 'wedding',
      tags: ['wedding', 'sweetheart', 'decor']
    },
    {
      src: '/images/gallery/wed-6.png',
      alt: 'Sweetheart table setup',
      caption: 'A magical day under the sun as Divya & Neel tied the knot in a breathtaking celebration of love ✨💐',
      category: 'wedding',
      tags: ['wedding', 'sweetheart', 'decor']
    },
    {
     src: '/images/gallery/wed-7.png',
     alt: 'Sweetheart table setup',
     caption: 'Turning your wedding dreams into reality 💐',
     category: 'wedding',
     tags: ['wedding', 'sweetheart', 'decor']
   },
    {
     src: '/images/gallery/wed-8.png',
     alt: 'Sweetheart table setup',
     caption: '✨Welcome to Smiling Lotus ✨ Looking for someone to plan your perfect event? 💍🎉',
     category: 'wedding',
     tags: ['wedding', 'sweetheart', 'decor']
   },
    {
     src: '/images/gallery/wed-9.png',
     alt: 'Sweetheart table setup',
     caption: 'Creating timeless celebrations with a touch of royalty 🌟👑',
     category: 'wedding',
     tags: ['wedding', 'sweetheart', 'decor']
   },
   
   {
    src: '/images/gallery/wed-10.png',
    alt: 'Sweetheart table setup',
    caption: 'Let us bring your dream wedding to life! 🌸',
    category: 'wedding',
    tags: ['wedding', 'sweetheart', 'decor']
  },
    
   {
    src: '/images/gallery/wed-11.png',
    alt: 'Sweetheart table setup',
    caption: '✨ A wedding mandap straight out of a dream! ✨',
    category: 'wedding',
    tags: ['wedding', 'sweetheart', 'decor']
  },
    
   {
    src: '/images/gallery/wed-12.png',
    alt: 'Sweetheart table setup',
    caption: 'A stunning blend of nature and architecture, setting the stage for an unforgettable celebration.🌸🌿',
    category: 'wedding',
    tags: ['wedding', 'sweetheart', 'decor']
  },
    
   {
    src: '/images/gallery/wed-13.png',
    alt: 'Sweetheart table setup',
    caption: 'Let us bring your dream wedding to life! 🌸',
    category: 'wedding',
    tags: ['wedding', 'sweetheart', 'decor']
  },
    
    // Social Events
    {
      src: '/images/gallery/social-1.png',
      alt: 'Birthday party celebration',
      caption: 'Making memories that will last a lifetime  🎉 ',
      category: 'social',
      tags: ['social', 'birthday', 'celebration']
    },
    
    {
      src: '/images/gallery/social-2.png',
      alt: 'Birthday party celebration',
      caption: 'No matter the occasion, we’ve got the perfect setup to match your vibe 🎈🎃🎂!',
      category: 'social',
      tags: ['social', 'birthday', 'celebration']
    },
    {
      src: '/images/gallery/social-3.png',
      alt: 'Anniversary party',
      caption: 'Birthday vibes only! Celebrate in style with our vibrant tent setups 🎉',
      category: 'social',
      tags: ['social', 'birthday', 'celebration']
    },
    {
      src: '/images/gallery/social-4.png',
      alt: 'Graduation party',
      caption: 'Bringing the party vibes with our trendy and unique decorations! 🎉',
      category: 'social',
      tags: ['social', 'birthday', 'celebration']
    },
    {
      src: '/images/gallery/social-5.png',
      alt: 'Graduation party',
      caption: 'Birthdays are a time to celebrate the joy of life and be grateful for the opportunities ahead 🎉',
      category: 'social',
      tags: ['social', 'birthday', 'celebration']
    },
    {
      src: '/images/gallery/social-6.png',
      alt: 'Graduation party',
      caption: 'Party decorations so fabulous, they steal the show! 🎉🎈',
      category: 'social',
      tags: ['social', 'birthday', 'celebration']
    },

  
  ]

  const categories = [
    { id: 'all', name: 'All Events', count: galleryImages.length },
    { id: 'wedding', name: 'Weddings', count: galleryImages.filter(img => img.category === 'wedding').length },
    // { id: 'corporate', name: 'Corporate', count: galleryImages.filter(img => img.category === 'corporate').length },
    { id: 'social', name: 'Social Events', count: galleryImages.filter(img => img.category === 'social').length },
    // { id: 'tents', name: 'Tent Setups', count: galleryImages.filter(img => img.category === 'tents').length },
    // { id: 'tables', name: 'Table Setups', count: galleryImages.filter(img => img.category === 'tables').length },
    // { id: 'chairs', name: 'Chair Setups', count: galleryImages.filter(img => img.category === 'chairs').length },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-blue mb-4">
            Event Gallery
          </h1>
          <p className="text-xl text-light-brown max-w-3xl mx-auto">
            Browse through our portfolio of beautifully executed events. Get inspired by real setups 
            and discover how our rentals can transform your special occasion.
          </p>
        </div>

        {/* Instagram Style Banner */}
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl p-8 mb-12 text-white text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">Follow Us on Instagram</h3>
                <p className="text-white/90">@TeamProEvents</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-lg mb-2">See more photos & videos of our events!</p>
              <a 
                href="https://www.instagram.com/team_pro_events?igsh=cm5hNXc0YTdodXN0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Follow on Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-navy-blue text-white shadow-lg'
                  : 'bg-white text-light-brown hover:bg-navy-blue hover:text-white shadow-md'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-navy-blue/10 text-navy-blue'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <GalleryComponent 
            images={filteredImages} 
            title={null}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-blue mb-4">
            Ready to Create Your Dream Event?
          </h2>
          <p className="text-light-brown mb-6 max-w-2xl mx-auto">
            Let us help you bring your vision to life. Our team can recreate any of these beautiful setups or work with you to design something entirely unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
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

export default Gallery