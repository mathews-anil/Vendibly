import Link from "next/link";

interface Vendor {
  title: string;
  slug: string;
  vendorName: string;
  category: string;
}

interface VendorsViewProps {
  vendors: Vendor[];
}

const VendorsView = ({ vendors }: VendorsViewProps) => {
  return (
    <section className="container mx-auto px-4 py-20 pt-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-outfit text-app-blue">Vendors</h1>
      <p className="text-center text-foreground-copy mb-12 max-w-2xl mx-auto">
        Browse our supported vendors and learn how to manage them with Vendibly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <Link href={`/vendors/${vendor.slug}`} key={vendor.slug} className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-app-orange/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold font-outfit text-app-blue group-hover:text-app-orange transition-colors">{vendor.vendorName || vendor.title}</h2>
              <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600">{vendor.category}</span>
            </div>
            <p className="text-foreground-copy text-sm">Click to view details about {vendor.vendorName || vendor.title} integration and management.</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VendorsView;
