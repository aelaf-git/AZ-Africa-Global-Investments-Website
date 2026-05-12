import { Button } from '@/components/ui/button';
import { Target, Eye } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our strategic direction is fueled by a commitment to excellence and a passion for Africa's economic advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 animate-on-scroll shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-8 text-primary">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be a leading African advisory firm, recognized globally for fostering partnerships, empowering communities, and catalyzing transformative investments that shape a prosperous and sustainable future.
            </p>
          </div>

          <div className="bg-primary border border-primary/10 rounded-2xl p-8 md:p-12 animate-on-scroll shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="bg-white/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-8 text-white">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              To deliver innovative and high-impact advisory and consulting services that drive sustainable growth and development across key sectors, contributing to Ethiopia's and Africa’s economic and social advancement.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-10">
            Learn More About Our Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
