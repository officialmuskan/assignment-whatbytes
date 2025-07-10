import Image from "next/image";
Sidebar
Filters
ProductCard
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import data from '@/components/data'
import { Sidebar } from "lucide-react";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
export default function Home() {
  return (
    <>
    <div>
  <Header />
  <main className="flex flex-1 p-6 bg-blue-100">
    <Filters />

    <section className="w-full md:ml-64">
      <div className="px-9 mb-3">
        <h1 className="text-3xl text-bold text-blue-900">Product Listing</h1>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 px-9">
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  </main>
</div>

    </>
  );
}
