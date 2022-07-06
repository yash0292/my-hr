import { GiHamburgerMenu } from 'react-icons/gi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { BsBellFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center rounded-lg shadow-md p-5'>
        <div className='flex items-center'>
            <GiHamburgerMenu className='h-6 w-6'/>
            <spann className="ml-5 text-xl">Dashboard</spann> 
        </div>
        <ul className='flex gap-5'>
            <li><RiAccountCircleFill className='h-6 w-6'  /></li>
            <li><BsBellFill className='h-6 w-6' /></li>
        </ul>
    </div>
  )
}

export default Navbar