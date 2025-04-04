import Link from 'next/link'
import { AiFillBug } from "react-icons/ai";


const Navbar = () => {
  const links = [
    {label : 'Dashboard', href: '/' },
    {label : 'Issues', href: '/issues' },
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href="/"><AiFillBug/></Link>
        <ul className='flex space-x-6'>
          {links.map(link => 
            <Link
               key={link.href}
               className='text-gray-500 hover:text-gray-900'
                href='/' >
                  {link.label}
            </Link>
          )}
        </ul>
    </nav>
  )
}

export default Navbar