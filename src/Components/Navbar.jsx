import '../App.css';

function NavigationBar() {
  return (
    <nav className="bg-[#001317] h-24 px-8 flex justify-evenly items-center fixed top-0 w-full z-50 shadow-sm border-b-2 border-[#75ffff]">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <img
          src="https://compliance.torusfinancialmarkets.com/static/images/webp/logo.webp"
          height="50"
          width="160"
          alt="Fyrii Logo"
        />
      </div>

      {/* Nav Links */}
      <div className="font-semibold flex items-center gap-5 text-white text-lg">
        <a
          href="/"
          className="hidden md:block px-4 py-2 rounded-lg hover:bg-[#14262a] hover:text-[#75ffff] transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#about"
          className="hidden md:block px-4 py-2 rounded-lg hover:bg-[#14262a] hover:text-[#75ffff] transition-colors duration-200"
        >
          About Us
        </a>
        <a
          href="#services"
          className="hidden md:block px-4 py-2 rounded-lg hover:bg-[#14262a] hover:text-[#75ffff] transition-colors duration-200"
        >
          Services
        </a>
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 rounded-lg hover:bg-[#14262a] hover:text-[#75ffff] transition-colors duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* Sign In */}
      <div>
        <a
          href="/login"
          className="px-6 py-2 text-lg font-bold text-black bg-[#75ffff] rounded-lg transition duration-300 hover:text-[#75ffff] hover:bg-[#14262a] border-2 border-[#75ffff] hover:border-[#14262a] shadow-md hover:shadow-lg"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
