// File: app/products/[productId]/page.jsx
import data from '@/components/data'
import { Rating } from '@mui/material'
// Rating
export default function ProductDetail({ params }) {
  const { productId } = params
  const product = data.find(p => p.id.toString() === productId)

  

  return (
    <div className="p-6 w-full sm:h-[100vh] flex justify-center items-center">
      <div className="grid  md:grid-cols-2 gap-8">
        <img src={product.image} className="w-full sm:h-96 object-cover rounded" alt={product.title} />
        <div className='flex flex-col gap-2'>
          <p className="mb-2 text-zinc-500">{product.category.toUpperCase()}</p>
          <h1 className="text-blue-900 text-2xl font-bold mb-2">{product.title}</h1>
          <hr className='text-zinc-100'/>
          <p className="text-lg mb-2">₹{product.price}</p>
          
          <Rating name="read-only" value={product.rating} size='large' readOnly />
          
          <p className="mb-4 text-gray-600"><span className='text-black font-bold'>Description:</span> {product.description}</p>
          <input type="number" min="1" defaultValue="1" className="border p-2 w-20 mb-2" />
          <br />
          <button className="bg-black text-white px-4 py-2  bg-blue-900 rounded-[10px] ">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
