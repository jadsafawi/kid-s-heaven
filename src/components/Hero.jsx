export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-start pl-6"
      style={{
        backgroundImage: "url('/images/picture.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glass card */}
      <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl max-w-3xl text-center px-10 py-12">
        
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-indigo-800">
          Welcome to <span className="text-indigo-600">Kid’s Heaven</span> 🎁
        </h1>

        <p className="mt-6 text-lg text-gray-700 font-medium">
          A world full of fun, learning, and imagination. Discover toys that inspire creativity
          and bring joy to every child.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="/shop"
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Shop Now
          </a>

          <a
            href="/about"
            className="border border-indigo-600 text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}