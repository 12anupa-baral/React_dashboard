
import React from 'react';
import loginImg from '../../assets/login.png';
import styles from './auth.module.scss'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../../components/card/Card';

function Login() {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="login" width="400" />
      </div>
      <Card >
        <div className={styles.form}>
          <h2 >Login</h2>
          <form >
              
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
              />
           
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your password"
              />
              <button className='--btn --btn-primary --btn-block'>Login
              </button>
           <Link to="/reset">Reset Password</Link>

           <p>-- or --</p>

          </form>
          <button className='--btn --btn-danger --btn-block'>
            <FaGoogle color="#fff" /> Login with Google
              </button>
<span className={styles.register}>
              <p>Don't have an account?</p>
                <Link to="/register">Register</Link>
              </span>
         
        </div>
      </Card>
    </section>
  );
}

export default Login;
