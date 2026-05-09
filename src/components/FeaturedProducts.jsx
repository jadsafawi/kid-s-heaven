const products = [
  {
    name: "Army toys",
    price: "$29",
    img: "/images/army.webp",
  },
  {
    name: "Toy Story",
    price: "$19",
    img: "/images/toystory.jpg",
  },
  {
    name: "Toy Bike",
    price: "$15",
    img: "/images/bike.webp"
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-10 py-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Featured Toys ⭐
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
          >
            <img src={p.img} className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-pink-500 font-bold">{p.price}</p>
              <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}