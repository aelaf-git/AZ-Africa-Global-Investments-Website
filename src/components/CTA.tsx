
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-center shadow-2xl overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-white relative z-10">
            Ready to build <span className="text-accent underline decoration-yellow-400/50 underline-offset-8">strategic partnerships</span>?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in relative z-10" style={{ animationDelay: '0.2s' }}>
            Connect with AZ Africa Global Investments to mobilize resources, facilitate investments, and deliver transformative advisory solutions across Africa and global markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in relative z-10" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-accent hover:opacity-90 text-accent-foreground px-8 py-6 font-bold">
              <a href="mailto:info@azafrica.investments">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 py-6">
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70 animate-fade-in relative z-10" style={{ animationDelay: '0.6s' }}>
            Pan-African expertise · Government & institutional networks · Impact-driven investments
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
