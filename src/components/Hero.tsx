export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-8">
      <h2 className="text-5xl font-bold mb-4 text-gray-900">
        Simplifica tu gestión con <span className="text-indigo-600">NovaPanel</span>
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Un panel moderno y rápido para visualizar, administrar y controlar tus proyectos
        de forma intuitiva. Sin configuraciones complicadas.
      </p>
      <a
        href="/login"
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
      >
        Empezar ahora
      </a>
    </section>
  );
}