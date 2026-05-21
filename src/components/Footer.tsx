import { Facebook, Twitter, Linkedin } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const serviceLinks = [
  'Investment & Partnerships',
  'Diplomatic Relations',
  'Resource Mobilization',
  'Policy Advisory',
  'Business Development',
  'Security Advisory',
];

const companyLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#vision-mission', label: 'Vision & Mission' },
  { href: '#why-choose-us', label: 'Why Choose Us' },
  { href: '#partners', label: 'Our Partners' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <OptimizedImage
                src="/az-logo.png"
                alt="AZ Africa Global Investments"
                className="h-16 w-auto object-contain"
                width={256}
                height={198}
              />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                AZ Africa <span className="text-primary font-extrabold">Global Investments</span>
              </h2>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Award-winning Pan-African advisory, consulting, and investment facilitation firm—founded in 2017, restructured in 2021.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Regions</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Africa</li>
              <li>Middle East</li>
              <li>Far East</li>
              <li>Global Markets</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} AZ Africa Global Investments. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
