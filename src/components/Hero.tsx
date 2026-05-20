
import { useState, useCallback, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    title: "Empowering Growth",
    subtitle: "Catalyzing Investments",
    description: "Expert advisory and consulting services for financial institutions, government organizations, and international entities across Africa.",
    image: "/az-main.png",
    founded: "2021",
    sectors: "5+",
    reach: "Global"
  },
  {
    title: "Strategic Advisory",
    subtitle: "Global Perspectives",
    description: "Tailored consulting solutions designed to navigate complex market dynamics and unlock sustainable value in emerging economies.",
    image: "/about-us.png",
    founded: "2021",
    sectors: "Advisory",
    reach: "Africa"
  },
  {
    title: "Catalyzing Capital",
    subtitle: "Driving Innovation",
    description: "Bridging the gap between international investors and transformative opportunities across the African continent.",
    image: "/az-main.png", // Reusing or could use another
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
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-gradient-blue-pro hero-glow pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 relative h-full flex items-center" key={index}>
              <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 animate-fade-in-left">
                    <div className="inline-flex items-center mb-6">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mr-2">Established {slide.founded}</span>
                      <span className="text-xs text-blue-200/60 font-medium">Global Advisory & Consulting Firm</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                      <span className="text-gradient">{slide.title}</span>, {slide.subtitle}
                    </h1>
                    <p className="text-lg text-blue-100/80 mb-8 max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-none transition-all duration-300">
                        Our Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="lg" className="border-blue-400/30 text-white hover:bg-white/10 py-6 rounded-none">
                        Learn More
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="mt-12 flex items-center space-x-8">
                      <div>
                        <p className="text-3xl font-bold text-white">{slide.founded}</p>
                        <p className="text-xs text-blue-300/60 uppercase tracking-widest">Year Founded</p>
                      </div>
                      <div className="h-10 w-px bg-blue-500/20"></div>
                      <div>
                        <p className="text-3xl font-bold text-white">{slide.sectors}</p>
                        <p className="text-xs text-blue-300/60 uppercase tracking-widest">Key Sectors</p>
                      </div>
                      <div className="h-10 w-px bg-blue-500/20"></div>
                      <div>
                        <p className="text-3xl font-bold text-white">{slide.reach}</p>
                        <p className="text-xs text-blue-300/60 uppercase tracking-widest">Reach & Impact</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right hidden lg:block">
                    <div className="relative max-w-lg mx-auto">
                      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
                      <img 
                        src={slide.image}
                        alt="AZ Africa Global Investments" 
                        className="w-full h-auto relative z-10 animate-float object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-10 left-0 w-full z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-primary' : 'w-4 bg-white/20'}`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={scrollPrev}
              className="p-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all rounded-full"
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
