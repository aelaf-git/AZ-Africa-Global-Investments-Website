
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
    description:
      "Award-winning Pan-African advisory, consulting, and investment facilitation for governments, financial institutions, and international organizations.",
    image: "/az-main.png",
    imageWidth: 1024,
    imageHeight: 411,
    badge: "Founded 2017 · Restructured 2021",
    stat1: { value: "2017", label: "Founded" },
    stat2: { value: "9+", label: "Service Areas" },
    stat3: { value: "Global", label: "Reach" },
  },
  {
    titleLead: "Pan-African",
    titleAccent: "Advisory,",
    subtitle: "Global Partnerships",
    description:
      "Delivering strategic solutions across Africa, the Middle East, and the Far East—from investment promotion to diplomacy and resource mobilization.",
    image: "/about-us.jpg",
    imageWidth: 1024,
    imageHeight: 571,
    badge: "Africa · Middle East · Far East",
    stat1: { value: "G2G", label: "Diplomatic Support" },
    stat2: { value: "PPP", label: "Policy Advisory" },
    stat3: { value: "Multi", label: "Sector Expertise" },
  },
  {
    titleLead: "Connecting",
    titleAccent: "Opportunity,",
    subtitle: "Driving Prosperity",
    description:
      "Building sustainable partnerships and transformative solutions that advance growth and development across emerging and established markets.",
    image: "/az-main.png",
    imageWidth: 1024,
    imageHeight: 411,
    badge: "Advisory · Consulting · Investment",
    stat1: { value: "Grant", label: "Mobilization" },
    stat2: { value: "Mega", label: "Project Support" },
    stat3: { value: "Impact", label: "Driven" },
  },
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
                    <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">{slide.badge}</span>
                      <span className="text-xs text-gray-400 hidden sm:inline">|</span>
                      <span className="text-xs text-gray-500 font-medium">Pan-African Advisory & Consulting Firm</span>
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
                        <p className="text-2xl font-bold text-foreground">{slide.stat1.value}</p>
                        <p className="text-sm text-gray-500">{slide.stat1.label}</p>
                      </div>
                      <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{slide.stat2.value}</p>
                        <p className="text-sm text-gray-500">{slide.stat2.label}</p>
                      </div>
                      <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{slide.stat3.value}</p>
                        <p className="text-sm text-gray-500">{slide.stat3.label}</p>
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
