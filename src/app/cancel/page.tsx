import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Płatność anulowana</h1>
          <p className="text-gray-300 mb-6">
            Twoja płatność została anulowana. Jeśli masz jakieś pytania, skontaktuj się z nami.
          </p>
          <Link
            href="/"
            className="inline-block bg-cyan text-black font-semibold px-6 py-3 rounded hover:bg-blue-400 transition"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}