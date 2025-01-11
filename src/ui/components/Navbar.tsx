import { IoMenuSharp, IoSearch } from 'react-icons/io5'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="absolute w-full flex justify-between items-center h-16 bg-transparent text-white px-8">
      <div>
        <Link href="/">afrowide</Link>
      </div>
      <div className='flex gap-4'>
      <IoSearch />
      <IoMenuSharp className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar