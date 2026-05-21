import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="overflow-hidden border-gray-100 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group animate-on-scroll flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={`${category.title} — placeholder`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 backdrop-blur-sm p-2 shadow-sm">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg md:text-xl leading-snug text-foreground">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {category.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pt-0">
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
