
import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";


const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with CryptoFlow is easy. Follow these simple steps to begin your crypto journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white border border-gray-100 rounded-xl p-8 animate-on-scroll shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-accent border rounded-md border-accent/30 text-accent-foreground font-bold text-xl px-3 py-1 shadow-sm">
                {step.number}
              </span>
              <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-crypto-dark-purple text-white px-8">
            Create Free Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
