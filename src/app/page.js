'use client'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Filters from "@/components/Filters"
import ProductCard from "@/components/ProductCard"
import data from '@/components/data'
// import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Products from "./products/page"
Products
export default function Home() {
  
  return (
    <div>
      <Header />
      <Products/>
      <Footer />
    </div>
  )
}
