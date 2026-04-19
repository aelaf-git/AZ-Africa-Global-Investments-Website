
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Crypto<span className="text-primary">Flow</span>
            </h2>
            <p className="text-gray-600 mb-6 max-w-xs">
              The most trusted cryptocurrency platform, empowering traders with innovative tools and unparalleled security.
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
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-500 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Exchange</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Wallet</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">API</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Institutional</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">DeFi Platform</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Market Data</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Legal & Privacy</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CryptoFlow. All rights reserved.
              ~ Distributed By <a href="https://themewagon.com/" target="_blank" className="text-primary hover:underline font-medium">ThemeWagon</a>
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#!" className="text-gray-500 hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
