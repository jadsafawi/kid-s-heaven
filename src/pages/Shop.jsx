import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const products = [
  {
    name: "Army Toys",
    price: "$29",
    img: "/images/army.webp",
  },

  {
    name: "Toy Bike",
    price: "$15",
    img: "/images/bike.webp",
  },

   {
    name: "Dinosaur Toy",
    price: "$10",
    img: "/images/dino.webp",
  },

   {
    name: "Winnie The Pooh ",
    price: "$25",
    img: "/images/winnie.webp",
  },

   {
    name: "Starwars Lego Set",
    price: "$35",
    img: "/images/Starwars.jpeg",
  },

  {
    name: "Cars Toy Set",
    price: "$15",
    img: "/images/cars.webp",
  },
  {
    name: "Creative puzzle Set",
    price: "$30",
    img: "/images/puzzle.webp",
  },
  {
    name: "Princess Toy",
    price: "$18",
    img: "/images/princess.jpeg",
  },
];

export default function Shop() {
  return (
    <>
    <Navbar></Navbar>
    <section className="min-h-screen bg-blue-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🛍️ Toy Shop
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <img
              src={p.img}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-gray-800">{p.name}</h2>
              <p className="text-blue-600 font-bold mt-1">{p.price}</p>

              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer></Footer>
    </>

  );
}