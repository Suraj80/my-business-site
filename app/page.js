export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        My Business Website
      </h1>
      <p className="text-lg mb-4">
        We provide awesome services for our clients.
      </p>
      <a
        href="/contact"
        className="px-4 py-2 rounded bg-black text-white"
      >
        Contact Us
      </a>
    </main>
  );
}
