import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <div>
      <h1 className={styles.text}>
          Livros e autores
        </h1>
        <h3 className={styles.text}>
          organizados em um só lugar!
        </h3>
      </div>   
    </ul>
  )
}
