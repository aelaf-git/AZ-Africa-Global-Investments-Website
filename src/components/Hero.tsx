
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="inline-flex items-center mb-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider mr-2">Established 2021</span>
              <span className="text-xs text-gray-500 font-medium">Global Advisory & Consulting Firm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              <span className="text-gradient">Empowering Growth</span>, Catalyzing Investments
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Expert advisory and consulting services for financial institutions, government organizations, and international entities across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 py-6">
                Learn More
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-foreground">2021</p>
                <p className="text-sm text-gray-500">Year Founded</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-sm text-gray-500">Key Sectors</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-foreground">Global</p>
                <p className="text-sm text-gray-500">Reach & Impact</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <img 
                src="/az-main.png"
                alt="AZ Africa Global Investments" 
                className="w-full h-auto animate-float object-contain"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
