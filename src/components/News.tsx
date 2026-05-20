import { newsItems } from '@/data/siteContent';
import { Calendar, Newspaper } from 'lucide-react';

const News = () => {
  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">News & Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Updates on partnerships, projects, and advisory initiatives across our global network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <Newspaper className="h-5 w-5 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{item.excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
