
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import OptimizedImage from '@/components/OptimizedImage';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Founded 2017 · Restructured 2021
              </span>
              <span className="text-xs text-gray-400 hidden sm:inline">|</span>
              <span className="text-xs text-gray-500 font-medium">Pan-African Advisory & Consulting Firm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Empowering </span>
              <span className="text-accent">Growth,</span>{' '}
              <span className="text-foreground">Catalyzing Investments</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Award-winning Pan-African advisory, consulting, and investment facilitation for governments,
              financial institutions, and international organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-none transition-all duration-300">
                <a href="#services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 py-6 rounded-none bg-white">
                <a href="#about">
                  Learn More
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <p className="text-2xl font-bold text-foreground">2017</p>
                <p className="text-sm text-gray-500">Founded</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div>
                <p className="text-2xl font-bold text-foreground">9+</p>
                <p className="text-sm text-gray-500">Service Areas</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div>
                <p className="text-2xl font-bold text-foreground">Global</p>
                <p className="text-sm text-gray-500">Reach</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right hidden lg:block">
            <div className="relative max-w-md mx-auto">
              <OptimizedImage
                src="/az-main.png"
                alt="AZ Africa Global Investments"
                className="w-full h-auto animate-float object-contain"
                width={1024}
                height={411}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
