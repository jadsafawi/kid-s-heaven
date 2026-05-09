import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
    <Navbar></Navbar>
<section className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          About Kid's Heaven 🎁
        </h1>

        <p className="text-gray-700 leading-7 text-lg">
          Welcome to <span className="font-semibold text-blue-600">ToyLand</span>, 
          your one-stop destination for fun, safe, and creative toys for kids of all ages.
        </p>

        <p className="text-gray-700 leading-7 text-lg mt-4">
          Our mission is to bring joy, imagination, and learning together through high-quality toys
          that inspire creativity and development.
        </p>

        <p className="text-gray-700 leading-7 text-lg mt-4">
          From action figures to educational toys, we carefully select products that are both fun and meaningful.
        </p>

        <div className="mt-8 bg-blue-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Why choose us?
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Safe & high-quality toys</li>
            <li>Affordable prices</li>
            <li>Fast delivery</li>
            <li>Trusted by parents</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
    
  );
}