import React from 'react'
import styles from "./ooter.module.scss";


const date = new Date();
export const year = date.getFullYear();
function Footer() {
  return (
    <div className={styles.footer}>&copy; {year} All Rights Reserved</div>
  )
}

export default Footer