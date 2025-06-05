import { FaMicrophone, FaHeadphones, FaMusic } from 'react-icons/fa';

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
        <h2 className="text-4xl font-bold text-white">Co oferujemy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaMicrophone className="text-cyan text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white">Nagrania</h3>
            <p className="text-gray-300 mt-2">Neumann TLM 102 • AudioFuse • UAD</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeadphones className="text-cyan text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white">Mix & Master</h3>
            <p className="text-gray-300 mt-2">FabFilter • UAD • Profesjonalny dźwięk</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMusic className="text-cyan text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white">Produkcja</h3>
            <p className="text-gray-300 mt-2">Beaty hip-hop, trap, lo-fi</p>
          </div>
        </div>
      </div>
    </section>
  );
}