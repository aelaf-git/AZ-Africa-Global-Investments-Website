import { whyChooseUs } from '@/data/siteContent';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Choose AZ Africa</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A trusted partner for governments, institutions, and investors seeking transformative impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-8 animate-on-scroll shadow-sm hover:shadow-md transition-shadow lg:last:col-span-1"
              >
                <div className="rounded-xl w-12 h-12 flex items-center justify-center mb-6 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
