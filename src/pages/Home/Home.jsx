import React from 'react'
import './Home.scss';
import { useSelector } from 'react-redux';


function Home() {
  const {name} = useSelector((state)=>state.data);
  return (
    <div className='home'>
      <div className='container'> 

      <h2>Welcome to <b>My Website</b></h2>
      {/* <p>
        This page has <b>Redux Toolkit</b> set up.
      </p>
      <p> 
        The name: <b>{name}</b> is stored in the dataSlice
      </p> */}
      </div>
    </div>
  )
}

export default Home