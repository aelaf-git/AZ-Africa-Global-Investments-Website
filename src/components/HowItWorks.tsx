
import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";


const HowItWorks = () => {
  return (
    <section id="values" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Company Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core values guide every engagement and partnership we build, ensuring sustainable and ethical growth for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white border border-gray-100 rounded-xl p-8 animate-on-scroll shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
