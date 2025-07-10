'use client'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Filters from "@/components/Filters"
import ProductCard from "@/components/ProductCard"
import data from '@/components/data'
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function Products() {
  const params = useSearchParams()
  const Category = params.get('category')
  const price = params.get('price')
  const search = params.get('search')
  const category = Category ? Category.toLowerCase() : ''

  const [filtered, setFiltered] = useState([])
useEffect(() => {
  let products = [...data]

  if (category && category !== 'all') {
    products = products.filter(p => p.category.toLowerCase() === category)
  }

  if (price) {
    const [min, max] = price.split('-').map(Number)
    products = products.filter(p => p.price >= min && p.price <= max)
  }

  if (search) {
    const q = search.toLowerCase().trim()
    products = products.filter(p => p.title.toLowerCase().includes(q))
  }

  setFiltered(products)
}, [category, price, search])


  return (
   
      
      <main className="flex flex-1 p-6 bg-blue-100">
        <Filters />
        <section className="w-full md:ml-64">
          <div className="px-9 mb-3">
            <h1 className="text-3xl font-bold text-blue-900">Product Listing</h1>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 px-9">
            {filtered.length > 0 ? (
              filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-blue-800 text-bold text-lgf h-[80vh] w-full">No products found.</p>
            )}
          </div>
        </section>
      </main>
      
  
  )
}
