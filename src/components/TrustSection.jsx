const features = [
  {
    title: "Safe & Certified Toys",
    desc: "All products are tested and approved for child safety.",
    emoji: "🛡️",
  },
  {
    title: "Fast Delivery",
    desc: "Quick and reliable shipping straight to your doorstep.",
    emoji: "🚚",
  },
  {
    title: "Best Prices",
    desc: "High quality toys at affordable prices for every family.",
    emoji: "💰",
  },
  {
    title: "Loved by Parents",
    desc: "Trusted by thousands of happy families worldwide.",
    emoji: "❤️",
  },
];

export default function TrustSection() {
  return (
    <section className="px-10 py-20 bg-gray-50">
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Parents Trust Kid’s Heaven
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}