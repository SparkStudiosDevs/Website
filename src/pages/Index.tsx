import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-spark-orange to-spark-yellow">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Portfolio Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Discover a curated collection of stunning photography and design work. 
            Navigate through our gallery using the interactive carousel below.
          </p>
        </div>
        
        <div className="flex justify-center">
          <PortfolioCarousel />
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm text-white/70 drop-shadow-sm">
            Use the arrows or swipe to explore the collection
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
