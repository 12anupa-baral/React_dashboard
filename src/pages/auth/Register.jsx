import React from 'react'
import registerImg from '../../assets/register.png';
import styles from './auth.module.scss'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../../components/card/Card';

function Register() {
  return (
    <section className={`container ${styles.auth}`}>
      
      <Card >
        <div className={styles.form}>
          <h2 >Register</h2>
          <form >
              
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Email"
              />
           
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="password"
              />

<input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Confirm Password"
              />
              <button className='--btn --btn-primary --btn-block'>Register
              </button>
          

          
          </form>
          
<span className={styles.register}>
              <p>Already have an account?</p>
                <Link to="/login">Login</Link>
              </span>
         
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="login" width="400" />
      </div>
    </section>
  )
}

export default Register