import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
    <Navbar></Navbar>
    <section className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Contact Us 📞
        </h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Email: support@toyland.com</p>
          <p>Phone: +961 70 123 456</p>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
}