import OptimizedImage from '@/components/OptimizedImage';
import { aboutContent } from '@/data/siteContent';
import { Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent-foreground border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider">Award-Winning Pan-African Firm</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{aboutContent.title}</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Core expertise</p>
              <div className="flex flex-wrap gap-2">
                {aboutContent.expertiseAreas.map((area) => (
                  <span
                    key={area}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-on-scroll">
            <div className="relative z-10 overflow-hidden rounded-xl">
              <OptimizedImage
                src="/about-us.jpg"
                alt="About AZ Africa Global Investments"
                className="w-full h-auto object-cover"
                width={1024}
                height={571}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
