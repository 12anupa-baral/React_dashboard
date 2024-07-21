import React from 'react'
import styles from './Admin.module.scss'
import Sidebar from '../../components/admin/sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from '../../components/admin/home/home'
import Profile from '../../components/admin/profile/Profile'

function admin() {
  return (
<div className={styles.admin}>
<div className={styles.navbar}>
<Sidebar/>

</div>
<div className={styles.content}>
  <Routes>
    <Route path='home' element={<Home/>}></Route>
    <Route path='profile' element={<Profile/>}></Route>

  </Routes>
  
</div>
 
</div>

   
  )
}

export default admin