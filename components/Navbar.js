import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>

        <Link href="/views/livros">Livros e autores</Link>
    </ul>
  )
}
