import { visionMission } from '@/data/siteContent';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Vision & Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guiding our commitment to partnerships, empowerment, and transformative investments across Africa and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 animate-on-scroll shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-8 text-primary">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{visionMission.vision}</p>
          </div>

          <div className="bg-primary border border-primary/10 rounded-2xl p-8 md:p-12 animate-on-scroll shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="bg-white/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-8 text-white relative z-10">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Our Mission</h3>
            <p className="text-white/90 text-lg leading-relaxed relative z-10">{visionMission.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
