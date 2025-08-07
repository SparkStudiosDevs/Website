import sparkLogo from "@/assets/spark-logo.png";

export const Header = () => {
  return (
    <header className="relative w-full bg-header-bg overflow-hidden">
      <div className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={sparkLogo} 
            alt="SparkStudios Logo" 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* Centered Title */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-unisans font-black text-white text-2xl md:text-3xl tracking-wide">
            SparkStudios
          </h1>
        </div>
        
        {/* Right side spacer to balance layout */}
        <div className="w-8 h-8"></div>
      </div>
      
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-4 md:h-6"
          viewBox="0 0 1200 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 12C100 4 200 20 300 12C400 4 500 20 600 12C700 4 800 20 900 12C1000 4 1100 20 1200 12V24H0V12Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7443" />
              <stop offset="50%" stopColor="#FF8535" />
              <stop offset="100%" stopColor="#FF9827" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
};