import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 logo-transition">
              <Zap className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Symflowise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Login</a>
            <a href="#" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#benefits" className="block text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <div className="pt-2 flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Login</a>
              <a href="#" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center">
                Start Free Trial
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
