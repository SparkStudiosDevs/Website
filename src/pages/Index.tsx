import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { Header } from "@/components/Header";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-spark-orange to-spark-yellow">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Highlights
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Everything you need to know about Sparkstudios in one place. Explore, learn, and get inspired!
          </p>
        </div>
        
        <div className="flex justify-center mb-[-10px]">
          <PortfolioCarousel />
        </div>
        
        <div className="text-center mb-13">
          <p className="text-sm text-white/70 drop-shadow-sm">
            Use the arrows or swipe to explore the collection
          </p>
        </div>
        
        <ServicesGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
