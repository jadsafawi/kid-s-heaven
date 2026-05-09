const products = [
  {
    name: "Army Toys",
    price: "$29",
    img: "/images/army.webp",
  },
  {
    name: "Toy Story Set",
    price: "$19",
    img: "/images/toystory.jpg",
  },
  {
    name: "Toy Bike",
    price: "$15",
    img: "/images/bike.webp",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        Featured Toys ⭐
      </h2>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((p, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {p.name}
              </h3>

              <p className="text-indigo-600 font-bold mt-1 text-lg">
                {p.price}
              </p>

              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold transition shadow-md">
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}