import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              About AZ Africa Global Investments
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                AZ Africa Global Investments was founded in 2021 and evolved into its current structure in 2024. The company provides expert advisory and consulting services to financial institutions, government organizations, and international entities.
              </p>
              <p>
                AZ Africa Global Investments is known for its comprehensive approach to diverse thematic areas such as business, health, peacebuilding, youth engagement, and financial services.
              </p>
              <p>
                In addition to consulting, AZ Africa plays a pivotal role in attracting investors to Ethiopia and facilitating import-export activities. The company also has a strong presence in media and communication, technology and innovation, and marketing services.
              </p>
              <p className="font-medium text-primary">
                We help clients expand their influence and capitalize on emerging opportunities in both local and global markets.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-on-scroll">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&h=800" 
                alt="About AZ Africa Global Investments"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
