import { MessageCircle, Youtube, Instagram, Github, HelpCircle, Code, Gamepad2, Wrench } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Join our community server",
    link: "#"
  },
  {
    icon: Youtube,
    name: "YouTube",
    description: "Watch our latest content",
    link: "#"
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Follow our visual journey",
    link: "#"
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Check out our projects",
    link: "#"
  },
  {
    icon: Code,
    name: "BuiltByBiy",
    description: "Custom development solutions",
    link: "#"
  },
  {
    icon: Gamepad2,
    name: "MCModels",
    description: "Minecraft model creations",
    link: "#"
  },
  {
    icon: HelpCircle,
    name: "Coming Soon",
    description: "Exciting new service",
    link: "#"
  },
  {
    icon: HelpCircle,
    name: "Coming Soon",
    description: "Another great feature",
    link: "#"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                className="group bg-spark-dark-light hover:bg-spark-dark-light/80 p-6 rounded-lg border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-spark-orange/20 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-spark-orange rounded-full flex items-center justify-center group-hover:bg-spark-yellow transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-spark-yellow transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};