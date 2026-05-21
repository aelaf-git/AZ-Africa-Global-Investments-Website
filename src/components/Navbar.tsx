import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#vision-mission', label: 'Vision & Mission' },
  { href: '#why-choose-us', label: 'Why Choose Us' },
  { href: '#partners', label: 'Our Partners' },
  { href: '#news', label: 'News' },
];

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-gray-100' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center min-w-0">
          <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0">
            <OptimizedImage
              src="/az-logo.png"
              alt="AZ Africa Global Investments"
              className="h-10 md:h-14 w-auto object-contain shrink-0"
              width={256}
              height={198}
              loading="eager"
              fetchPriority="high"
            />
            <span className="text-base md:text-xl font-bold text-foreground truncate hidden sm:inline">
              AZ Africa <span className="text-primary font-extrabold">Global Investments</span>
            </span>
          </Link>
        </div>

        <ul className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-600 hover:text-primary transition-colors text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-3 shrink-0">
          <Button asChild variant="ghost" className="text-gray-600 hover:text-primary">
            <a href="#contact">Contact</a>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-5">
            <a href="#contact">Partner With Us</a>
          </Button>
        </div>

        <button className="lg:hidden text-foreground shrink-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors block py-2.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex flex-col space-y-3 border-t border-gray-100 mt-2">
                <Button asChild variant="ghost" className="text-gray-600 hover:text-primary w-full justify-start">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Partner With Us</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
