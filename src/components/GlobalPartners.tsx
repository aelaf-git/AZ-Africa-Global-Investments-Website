import { globalPartners } from '@/data/siteContent';
import { Building2 } from 'lucide-react';

const GlobalPartners = () => {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Global Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with governments, financial institutions, development agencies, and private sector leaders worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {globalPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-6 min-h-[120px] hover:border-primary/20 hover:bg-white transition-colors"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 leading-tight">{partner.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10 max-w-lg mx-auto">
          Partner logos and names will be updated as official collaborations are announced.
        </p>
      </div>
    </section>
  );
};

export default GlobalPartners;
