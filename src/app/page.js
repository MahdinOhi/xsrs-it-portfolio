export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to XSRS Agency</h1>
      <p className="text-lg mb-6">
        We craft digital experiences that stand out.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
      >
        Get in Touch
      </a>
    </section>
  );
}
