const categories = [
  { name: "Action Figures", emoji: "🦸" },
  { name: "Educational", emoji: "📚" },
  { name: "Plush Toys", emoji: "🧸" },
  { name: "Cars & Vehicles", emoji: "🚗" },
];

export default function Categories() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl">{cat.emoji}</div>
            <h3 className="mt-3 font-semibold text-gray-700">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}