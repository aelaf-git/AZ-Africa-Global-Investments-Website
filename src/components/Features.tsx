
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { features } from '../data/featuresData';


const Features = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AZ Africa offers a comprehensive range of advisory and consulting services designed to foster partnerships and catalyze transformative investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-300 ${index % 3 === 2 ? 'bg-accent/20 text-accent group-hover:bg-accent/30' : 'bg-primary/10 text-primary group-hover:bg-primary/20'}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
