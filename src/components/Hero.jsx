export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/picture.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20">
        <div className="max-w-2xl text-white">
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-indigo-300">Kid’s Heaven</span> 🎁
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
            Discover a magical world of toys, creativity, and fun designed
            to bring joy and imagination to every child.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/shop"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 text-center"
            >
              Shop Now
            </a>

            <a
              href="/about"
              className="border border-white hover:bg-white hover:text-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 text-center"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}