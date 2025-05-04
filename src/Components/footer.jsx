export default function Footer() {
    return (
      <footer className="bg-[#001317] text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Footer Content */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-bold text-[#75ffff]">Developer Portal Torus Digital</div>
            <div className="flex space-x-6">
              <a
                href="/about"
                className="text-gray-300 hover:text-[#75ffff] transition-colors"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-gray-300 hover:text-[#75ffff] transition-colors"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-[#75ffff] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              © 2025 Torus Digital. Powered by{" "}
              <a
                href="https://fyrii.netlify.app/"
                className="text-[#75ffff] hover:text-white"
              >
                Fyrii DevX
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    );
  }
  