import React from "react";
import forgotImg from "../../assets/forgot.png";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
function Reset() {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={forgotImg} alt="login" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Email"
            />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>

            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}

export default Reset;
