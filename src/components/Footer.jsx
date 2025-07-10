import { Instagram, Facebook, Twitter } from 'lucide-react'
import React from 'react'
// Instagram

const Footer = () => {
  return (
    <>
    <footer className="bg-blue-900 text-white px-6 py-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">All</a></li>
        <li><a href="#" className="hover:underline">Electronic</a></li>
      </ul>
      <p className="mt-4 text-xs text-gray-300">© 2024 American</p>
    </div>

   
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition">
          <Facebook/>
        </a>
        <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition">
          <Instagram/>
        </a>
        <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition">
          <Twitter/>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer