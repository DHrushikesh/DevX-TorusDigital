export default function CardsSection() {
    return (
      <section className="relative bg-[#001317] text-white min-h-screen flex items-center justify-center">
        {/* Static Background SVG */}
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cloudGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#75ffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#75ffff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              fill="url(#cloudGradient)"
              fillOpacity="1"
              d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto text-center px-6 py-16">
          <h2 className="text-4xl font-extrabold text-white mb-12 animate__animated animate__fadeIn animate__delay-1s">
            Our Features
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="w-full bg-[#14262a] min-h-[450px] p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#75ffff] mb-4">Unified Trading APIs</h3>
              <p className="text-lg text-gray-300 mb-4">
                Access equities, options, and futures APIs through a single unified interface.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Real-time trading data</li>
                <li>Comprehensive market coverage</li>
                <li>Unified API interface for all asset classes</li>
              </ul>
              <button className="px-6 py-2 text-lg font-bold text-black bg-[#75ffff] rounded-lg transition duration-300 hover:text-[#75ffff] hover:bg-[#14262a] border-2 border-[#75ffff] hover:border-[#14262a] shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
  
            {/* Card 2 */}
            <div className="w-full bg-[#14262a] min-h-[450px] p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#75ffff] mb-4">Sandbox & Live Testing</h3>
              <p className="text-lg text-gray-300 mb-4">
                Test trades in a risk-free sandbox before going live with real money.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Simulate live market conditions</li>
                <li>Risk-free testing environment</li>
                <li>Validate your strategies without real capital</li>
              </ul>
              <button className="px-6 py-2 text-lg font-bold text-black bg-[#75ffff] rounded-lg transition duration-300 hover:text-[#75ffff] hover:bg-[#14262a] border-2 border-[#75ffff] hover:border-[#14262a] shadow-md hover:shadow-lg">
                Start Testing
              </button>
            </div>
  
            {/* Card 3 */}
            <div className="w-full bg-[#14262a] min-h-[450px] p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#75ffff] mb-4">Detailed Documentation</h3>
              <p className="text-lg text-gray-300 mb-4">
                Access complete Swagger/OpenAPI specs, tutorials, and use-case driven guides.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Comprehensive API documentation</li>
                <li>Code samples and tutorials</li>
                <li>Step-by-step guides for integration</li>
              </ul>
              <button className="px-6 py-2 text-lg font-bold text-black bg-[#75ffff] rounded-lg transition duration-300 hover:text-[#75ffff] hover:bg-[#14262a] border-2 border-[#75ffff] hover:border-[#14262a] shadow-md hover:shadow-lg">
                Explore Docs
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  