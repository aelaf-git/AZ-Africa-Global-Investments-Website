import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">
            AZ <span className="text-primary">Africa</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#vision-mission" className="text-gray-600 hover:text-primary transition-colors">
              Vision & Mission
            </a>
          </li>
          <li>
            <a href="#values" className="text-gray-600 hover:text-primary transition-colors">
              Values
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-primary">
            Contact
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white px-6">Partner With Us</Button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#vision-mission" className="text-gray-600 hover:text-primary transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-600 hover:text-primary transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Values
                </a>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="text-gray-600 hover:text-primary w-full justify-start">
                  Contact
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">Partner With Us</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
