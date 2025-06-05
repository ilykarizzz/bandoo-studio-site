export function TestimonialsSection() {
  return (
    <section className="py-20 bg-darkbg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Co mówią o nas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Michał K.",
              text: "Profesjonalne podejście i świetna atmosfera. Nagrania brzmią fenomenalnie!",
              role: "Raper"
            },
            {
              name: "Zespół Euforia",
              text: "Współpraca z Bandoo Studio to sama przyjemność. Polecamy każdemu, kto szuka dobrego brzmienia.",
              role: "Zespół rockowy"
            },
            {
              name: "Anna W.",
              text: "Mix i master na najwyższym poziomie. Będę wracać!",
              role: "Wokalistka"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-cyan text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}