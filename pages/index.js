
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  
  return (
    <>
      <h1></h1>
      <h1 className={styles.title}>Bem vindo a CountCost</h1>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch (`http://localhost:3000/person`)
  const data = await response.json()
  console.log(data._id)

  return {props:{data}}
}
