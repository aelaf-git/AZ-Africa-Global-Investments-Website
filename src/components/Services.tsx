import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { serviceCategories } from '@/data/siteContent';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive advisory, consulting, and investment facilitation across nine strategic service areas.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border border-gray-100 rounded-xl px-4 md:px-6 bg-gray-50/50 data-[state=open]:bg-white data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className="shrink-0 rounded-lg w-11 h-11 flex items-center justify-center bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-foreground pr-4">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="grid gap-2 md:grid-cols-2 pl-0 list-none">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-gray-600 text-sm md:text-base leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
