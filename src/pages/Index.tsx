import { PortfolioCarousel } from "@/components/PortfolioCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a curated collection of stunning photography and design work. 
            Navigate through our gallery using the interactive carousel below.
          </p>
        </div>
        
        <div className="flex justify-center">
          <PortfolioCarousel />
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Use the arrows or swipe to explore the collection
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
