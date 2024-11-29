import React from 'react'
import {Link} from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div className="">
            <Link to="/"><HiMiniBars3CenterLeft className='size-6'/>
</Link>
{/* search input */}
<div>
<IoSearchOutline />
  <input type="search" name='search' className='bg-[#EAEAEA]' placeholder='Search Here' />
</div>
            </div>

            {/* Right Side */}
            <div>Nav Item</div>
            </nav>

      </header>

    </div>
  )
}

export default Navbar
