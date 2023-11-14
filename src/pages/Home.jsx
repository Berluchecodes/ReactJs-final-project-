import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find a movie and learn  <br/> quickly and easily!
            </h1>

            <p className='hero__subtitle'>
                Search up your movie and learn, effortly and seamlessly!
            </p>
          <Link to='/Movies'>
            <button className='hero-btn'>
                Explore Movies
            </button>
          </Link>
        </div>
       
    </div>
  )
}

export default Home