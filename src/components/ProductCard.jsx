'use client'
import React from 'react'
Rating
import { useRouter } from 'next/navigation'
import { Rating } from '@mui/material'

const ProductCard = ({product}) => {
    const router = useRouter()
  return (
    <div className="bg-white p-4 rounded-lg shadow cursor-pointer" onClick={()=>router.push(`/products/${product.id}`)}>
      <img src={product.image} alt={product.title} className="w-full h-48 mb-2 object-cover rounded" />
      <Rating name="read-only" value={product.rating} size='small' readOnly />
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">₹{product.price}</p>
      <button className="mt-2 w-full bg-blue-900 rounded-[10px] text-white py-1">Add to Cart</button>
    </div>
  )
}

export default ProductCard