export function PricingSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-cyan">Promocja</h2>
        <p className="mt-4 text-gray-300 text-lg">
          3 godziny w cenie 2 – <span className="font-semibold text-white">140 zł</span><br/>
          5 godzin w cenie 3 – <span className="font-semibold text-white">210 zł</span>
        </p>
      </div>
    </section>
  );
}