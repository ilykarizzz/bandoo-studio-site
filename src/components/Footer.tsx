import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-darkbg border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-cyan text-xl font-bold">Bandoo Studio</h3>
            <p className="text-gray-400 mt-1">ul. Przykładowa 123, Warszawa</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan transition">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bandoo Studio. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}