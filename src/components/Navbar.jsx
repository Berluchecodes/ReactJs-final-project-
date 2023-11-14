import React, { useState } from 'react'
import {BiCameraMovie} from 'react-icons/bi'
import {BsMenuButtonWideFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
const Links = [
    {name:'HOME', link:'/'},
    {name:'MOVIES', link:'/movies'},
]

const [toggle, setToggle] = useState(false)



  return (
  <nav className=' w-full bg-black-gradient flex p-4 justify-between z-[100] items-center '>
    <Link to='/' >
    <div className='flex items-center font-bold cursor-pointer '>
    <span className='text-2xl mr-1 text-blue-400'>
        <BiCameraMovie/>
    </span>
    <h1 className='text-blue-400 text-2xl '>BPINFOFLIXS</h1>
    </div>
    </Link>
    
    <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
            {Links.map ((link, index)=> (
                <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-gray-400 hover:text-white duration-500`}>
                    <Link to={link.link}>{link.name}</Link>
                </li>
            ))}
        </ul>
        
    <div className="sm:hidden flex flex-1 justify-end items-center text-2xl mr-10">
        <div className='cursor-pointer text-blue-400' onClick={() => setToggle ((prev) => 
            !prev)}>
        {toggle ? <AiOutlineClose />  : < BsMenuButtonWideFill/>  }
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {Links.map ((link, index)=> (
                        <li key={index} className={'font-poppins font-normal cursor-pointer text-[16px] text-gray-400 hover:text-white duration-500'}>
                         <Link to={link.link}>{link.name}</Link>
                       </li>
                     ))}
                    </ul>
    
        </div>
    </div>
  </nav>
)
}

export default Navbar