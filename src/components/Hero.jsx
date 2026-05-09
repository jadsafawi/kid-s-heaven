export default function Hero() {
  return (
    <section className="bg-pink-50 flex flex-col md:flex-row items-center justify-between px-10 py-16">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Welcome to <span className="text-pink-500">ToyLand</span> 🎉
        </h2>
        <p className="mt-4 text-gray-600">
          Discover the best toys for kids of all ages. Fun, safe, and full of imagination.
        </p>

        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600">
          Shop Now
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1587654780291-39c94f0d0c7f"
        alt="toys"
        className="w-80 mt-8 md:mt-0 rounded-2xl shadow-lg"
      />
    </section>
  );
}