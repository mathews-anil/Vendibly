export default function HubCTA() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit text-foreground">
          Track all your subscriptions
        </h2>
        <p className="text-foreground-copy mb-10 max-w-2xl mx-auto text-lg">
          Vendibly connects to Gmail or Outlook, detects your SaaS vendors, and
          keeps every renewal date and invoice organized in one dashboard.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-app-blue text-white font-bold px-10 py-4 rounded-full hover:bg-app-blue/90 transition-all hover:scale-105 shadow-2xl shadow-app-blue/20"
        >
          Start free with Vendibly
        </a>
      </div>
    </section>
  );
}
