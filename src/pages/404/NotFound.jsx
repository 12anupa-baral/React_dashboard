import React from 'react'
import { Link } from 'react-router-dom'
import  NotfoundIcon from '../../assets/Icons/notfound'

function NotFound() {
  return (
    <div className='--center-all' style={{minHeight:"60vh"}}>
      <div>
      <NotfoundIcon/>
      </div>
      
     <h2>Not Found</h2> 
     <p>Looks like the page you are looking for could not be found</p>
     <Link to="/" className="--btn --btn-primary" style={{margin:"20px"}} >Back To Home</Link>
      </div>
     
  )
}

export default NotFound