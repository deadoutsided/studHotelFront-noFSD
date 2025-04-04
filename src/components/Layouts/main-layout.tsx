import { useState } from 'react'
import styles from './style.module.css'
import Header from '@components/header/header'
import { Outlet } from 'react-router'

function MainLayout() {

  return (
    <main className={styles.layout}>
        <Header />
        <Outlet />
    </main>
  )
}

export default MainLayout
