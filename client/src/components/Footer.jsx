import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Team Pro Events</h3>
            <p className="text-cream mb-4 max-w-md">
              Turning moments into memories. We provide exceptional event rental items and services, 
              creating the perfect backdrop for your most cherished occasions.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-cream hover:text-light-pink transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a> */}
              <a href="https://www.instagram.com/team_pro_events?igsh=cm5hNXc0YTdodXN0" className="text-cream hover:text-light-pink transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-cream hover:text-light-pink transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-cream hover:text-light-pink transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-cream hover:text-light-pink transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-cream hover:text-light-pink transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-cream">
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
              <p>info@teamproevents.com</p>
              <p>sales@teamproevents.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cream/20">
          <p className="text-center text-cream/80">
            &copy; Team Pro Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer