
import { useState, useCallback, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import OptimizedImage from '@/components/OptimizedImage';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    titleLead: "Empowering",
    titleAccent: "Growth,",
    subtitle: "Catalyzing Investments",
    description: "Expert advisory and consulting services for financial institutions, government organizations, and international entities across Africa.",
    image: "/az-main.png",
    imageWidth: 1024,
    imageHeight: 411,
    founded: "2021",
    sectors: "5+",
    reach: "Global"
  },
  {
    titleLead: "Strategic",
    titleAccent: "Advisory,",
    subtitle: "Global Perspectives",
    description: "Tailored consulting solutions designed to navigate complex market dynamics and unlock sustainable value in emerging economies.",
    image: "/about-us.jpg",
    imageWidth: 1024,
    imageHeight: 571,
    founded: "2021",
    sectors: "Advisory",
    reach: "Africa"
  },
  {
    titleLead: "Catalyzing",
    titleAccent: "Capital,",
    subtitle: "Driving Innovation",
    description: "Bridging the gap between international investors and transformative opportunities across the African continent.",
    image: "/az-main.png",
    imageWidth: 1024,
    imageHeight: 411,
    founded: "2021",
    sectors: "Finance",
    reach: "Regional"
  }
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="embla overflow-hidden flex-1" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 relative flex items-center py-12" key={index}>
              <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 animate-fade-in-left">
                    <div className="inline-flex items-center mb-6">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider mr-2">Established {slide.founded}</span>
                      <span className="text-xs text-gray-500 font-medium">Global Advisory & Consulting Firm</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      <span className="text-primary">{slide.titleLead} </span>
                      <span className="text-accent">{slide.titleAccent}</span>{' '}
                      <span className="text-foreground">{slide.subtitle}</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-none transition-all duration-300">
                        Our Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 py-6 rounded-none bg-white">
                        Learn More
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="mt-12 flex items-center space-x-8">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{slide.founded}</p>
                        <p className="text-sm text-gray-500">Year Founded</p>
                      </div>
                      <div className="h-12 w-px bg-gray-200"></div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{slide.sectors}</p>
                        <p className="text-sm text-gray-500">Key Sectors</p>
                      </div>
                      <div className="h-12 w-px bg-gray-200"></div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{slide.reach}</p>
                        <p className="text-sm text-gray-500">Reach & Impact</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right hidden lg:block">
                    <div className="relative max-w-md mx-auto">
                      <OptimizedImage
                        src={slide.image}
                        alt="AZ Africa Global Investments"
                        className="w-full h-auto animate-float object-contain"
                        width={slide.imageWidth}
                        height={slide.imageHeight}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : undefined}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-primary' : 'w-4 bg-gray-300'}`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={scrollPrev}
              className="p-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all rounded-full shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all rounded-full shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
