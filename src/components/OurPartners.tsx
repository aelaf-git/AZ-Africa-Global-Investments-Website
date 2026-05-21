import { partnerLogos } from '@/data/partnerLogos';

const LogoStrip = ({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) => (
  <div className="flex shrink-0 items-center gap-10 md:gap-14 px-6 md:px-8" aria-hidden={ariaHidden}>
    {partnerLogos.map((logo, index) => (
      <div
        key={`${ariaHidden ? 'b' : 'a'}-${index}`}
        className="flex h-20 md:h-24 w-32 md:w-40 shrink-0 items-center justify-center rounded-lg bg-white/80 px-3 py-2"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-14 md:max-h-16 max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}
  </div>
);

const OurPartners = () => {
  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with governments, financial institutions, development agencies, and private sector leaders worldwide.
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto max-w-full partners-marquee-mask"
        aria-label="Our partners logo carousel"
      >
        <div className="flex w-max animate-partners-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
          <LogoStrip />
          <LogoStrip aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
