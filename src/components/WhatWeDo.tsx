import { whatWeDo } from '@/data/siteContent';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Our Focus</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{whatWeDo.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{whatWeDo.description}</p>
      </div>
    </section>
  );
};

export default WhatWeDo;
