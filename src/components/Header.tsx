import sparkLogo from "@/assets/spark-logo.png";

export const Header = () => {
  return (
    <header className="relative w-full bg-header-bg overflow-hidden">
      <div className="relative z-10 flex items-center justify-start w-[100vw] px-6 py-10  mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={sparkLogo} 
            alt="SparkStudios Logo" 
            className="w-10 h-10 object-contain"
          />
        </div>
        
        {/* Centered Title */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-unisans font-black text-[#f16d3e] text-2xl md:text-3xl tracking-wide">
            SparkStudios
          </h1>
        </div>
        
        {/* Right side spacer to balance layout */}
        <div className="w-8 h-8"></div>
      </div>
      
      {/* More wavy bottom border */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-6 md:h-8"
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 16C60 4 120 28 180 16C240 4 300 28 360 16C420 4 480 28 540 16C600 4 660 28 720 16C780 4 840 28 900 16C960 4 1020 28 1080 16C1140 4 1200 28 1200 16V32H0V16Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffa825" />
              <stop offset="100%" stopColor="#ffa825" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
};