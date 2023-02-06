import styles from '../../styles/Todos.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const data = await fetch(`http://localhost:3000/person`)

  const todos = await data.json()

  return {
    props: { todos },
  }
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Festas Cadastradas:</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (
          <ol key={todo.id}>
             {todo.nome}
             <Link href={`/views/${todo._id}`}>
              <p>Ver detalhes</p>
            </Link>

          </ol>
        ))}
      </ul>
    </>
  )
}
