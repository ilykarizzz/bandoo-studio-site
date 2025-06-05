export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center">Kontakt</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block mb-2 text-gray-300">Imię / Zespół</label>
            <input
              type="text"
              placeholder="Jan Kowalski"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">E-mail</label>
            <input
              type="email"
              placeholder="mail@example.com"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Opis projektu</label>
            <textarea
              rows={4}
              placeholder="Opisz krótko, co chcesz nagrać…"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-cyan text-black font-semibold rounded hover:bg-blue-400 transition"
          >
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </section>
  );
}