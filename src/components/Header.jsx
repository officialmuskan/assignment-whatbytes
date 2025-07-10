import { ShoppingCart, User, Search} from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
useRouter
const Header = () => {
    const [text, setText] = useState("")
    const router = useRouter()
    const handleSearch = (e)=>{
        e.preventDefault();
         router.push(`/?search=${text}`)
    }
           

    
  return (
    <div><header className="flex items-center justify-between text-white sm:px-6 py-3 px-3 bg-blue-600 shadow-md">
      <div className="text-xl font-bold text-white">Whatbytes</div>
      <form onSubmit={handleSearch} className="sm:w-1/3 w-1/2 flex flex-row justify-center items-center relative">
      <span className='absolute left-[10px]'><Search size={18}/></span>
        <input
          type="text"
          placeholder={` Search products...`}
          className="w-full border px-3 py-2 pl-8 rounded-md focus:outline-none"
          onChange={(e)=>setText(e.target.value)}
        />
      </form>
      <div className="flex sm:gap-4 items-center">
        <div className='sm:bg-blue-900 py-2 sm:px-5 pl-1 pr-3 flex justify-between rounded-md gap-2 items-center'>
            <div className="relative cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">2</span>
          
        </div>
        <p className='hidden sm:block'>Cart</p>

        </div>
        
        <User className="w-6 h-6" />
      </div>
    </header></div>
  )
}

export default Header