export const Footer = () => {
  return (
    <footer className="relative w-full bg-header-bg mt-16">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-6 md:h-8 rotate-180"
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 16C60 4 120 28 180 16C240 4 300 28 360 16C420 4 480 28 540 16C600 4 660 28 720 16C780 4 840 28 900 16C960 4 1020 28 1080 16C1140 4 1200 28 1200 16V32H0V16Z"
            fill="url(#footer-wave-gradient)"
          />
          <defs>
            <linearGradient id="footer-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff8638" />
              <stop offset="100%" stopColor="#ff8638" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-unisans font-black text-white text-2xl mb-4">
              SparkStudios
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Creating innovative digital experiences and bringing creative visions to life. 
              From web development to multimedia content, we spark creativity in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-spark-orange transition-colors duration-300">
                Discord
              </a>
              <a href="#" className="text-white/70 hover:text-spark-orange transition-colors duration-300">
                YouTube
              </a>
              <a href="#" className="text-white/70 hover:text-spark-orange transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-spark-orange transition-colors duration-300">
                GitHub
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Minecraft Models</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Minecraft Graphics</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Minecraft Setup Specialists</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Discord Bots (BDFD)</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Discord Server Setups</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Web Developers</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Graphic Artists</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Video Editors</li>
              <li className="text-white/70 hover:text-spark-orange transition-colors duration-300">Photo Editors</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70">sparkstudios.devs@gmail.com</li>
              {/* <li className="text-white/70">+1 (555) 123-4567</li> */}
              <li className="text-white/70">replies spontaneously</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 SparkStudios. All rights reserved. Igniting creativity, one project at a time.
          </p>
        </div>
      </div>
    </footer>

  );
};