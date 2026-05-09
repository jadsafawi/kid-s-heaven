import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-50 min-h-screen py-16 px-6">

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-700">
            About Kid’s Heaven 🎁
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            More than a toy store — we build childhood memories.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-10">

          {/* Story */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Our Story
            </h2>
            <p className="text-gray-700 leading-7">
              Kid’s Heaven started with a simple idea — every child deserves access to toys
              that spark imagination, creativity, and joy. We noticed many stores focus only on selling,
              not on childhood experience. So we decided to change that.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-7">
              To create a world where every toy is safe, meaningful, and inspiring. We carefully select
              products that help children learn, grow, and have fun at the same time.
            </p>
          </div>

          {/* What makes us different */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              What Makes Us Different
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="font-semibold text-blue-700">🛡️ Safety First</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Every toy is tested and selected with child safety in mind.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="font-semibold text-blue-700">🎨 Creativity Focus</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  We choose toys that encourage imagination and learning.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="font-semibold text-blue-700">🚚 Fast Delivery</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  We make sure toys reach your home quickly and safely.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="font-semibold text-blue-700">❤️ Trusted by Parents</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Thousands of families trust Kid’s Heaven every day.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center pt-6">
            <h2 className="text-xl font-bold text-blue-700">
              Building happier childhoods, one toy at a time.
            </h2>
            <p className="text-gray-600 mt-2">
              Welcome to the Kid’s Heaven family 💙
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}