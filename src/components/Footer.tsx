
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/az-logo.png" alt="AZ Africa Global Investments" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              Leading African advisory firm providing expert consulting and investment facilitation services since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Advisory</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Investment</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Import-Export</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Media & PR</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Technology</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Sectors</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Business</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Health</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Peacebuilding</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Youth Engagement</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Financial Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#vision-mission" className="text-gray-600 hover:text-primary transition-colors">Vision & Mission</a></li>
              <li><a href="#values" className="text-gray-600 hover:text-primary transition-colors">Our Values</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Legal & Privacy</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
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
