import { IoMenuSharp, IoSearch } from 'react-icons/io5'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-white text-white px-8">
      <div>
        <Link href="/" className='text-black'>afrowide</Link>
      </div>
      <div className='flex gap-4 text-black'>
      <IoSearch />
      <IoMenuSharp />
      </div>
    </div>
  )
}

export default Navbar