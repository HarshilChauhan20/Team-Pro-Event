import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Tables from './pages/Tables'
import Chairs from './pages/Chairs'
import Tents from './pages/Tents'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'
import Floral from './pages/Floral'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream flex flex-col theme-transition">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/chairs" element={<Chairs />} />
            <Route path="/tents" element={<Tents />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/floral" element={<Floral />} />
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="text-6xl font-serif font-bold text-navy-blue mb-4">
          404
        </div>
        <h1 className="text-3xl font-serif font-semibold text-navy-blue mb-4">
          Page Not Found
        </h1>
        <p className="text-light-brown mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="btn-primary"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default App