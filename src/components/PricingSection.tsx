import { STRIPE_PRODUCTS } from '../stripe-config';
import { redirectToCheckout } from '../lib/stripe';

export function PricingSection() {
  const handlePurchase = async () => {
    try {
      await redirectToCheckout('STUDIO_HOUR');
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Wystąpił błąd podczas inicjowania płatności. Spróbuj ponownie później.');
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-cyan">Cennik</h2>
        <div className="mt-12 bg-gray-800 rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            {STRIPE_PRODUCTS.STUDIO_HOUR.name}
          </h3>
          <p className="text-gray-300 mb-6">
            {STRIPE_PRODUCTS.STUDIO_HOUR.description}
          </p>
          <p className="text-3xl font-bold text-cyan mb-8">
            70 zł / godzina
          </p>
          <button
            onClick={handlePurchase}
            className="px-8 py-4 bg-cyan text-black font-semibold rounded hover:bg-blue-400 transition"
          >
            Zarezerwuj sesję
          </button>
        </div>
      </div>
    </section>
  );
}