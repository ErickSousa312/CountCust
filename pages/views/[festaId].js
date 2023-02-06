import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../../styles/FestaId.module.css'

export async function getStaticProps(context) {

    const{params} = context
    console.log("--------------------------------------------------------------------------")
    console.log("Esse é o context de getStaticProps")
    console.log(context)
    console.log("--------------------------------------------------------------------------")
    console.log("Esse é o params de getStaticProps")
    console.log(params)
    console.log("--------------------------------------------------------------------------")
    const data = await fetch(
        `http://localhost:3000/person/${params.festaId}`,
        
    )
    console.log("Esse é data de getStaticProps")
    console.log(data)
    
    const festa = await data.json()

    return{
        props:{festa}
    }
    
}

export async function getStaticPaths() {
    const response = await fetch(
        `http://localhost:3000/person/`,
    )

    const data = await response.json()

    const paths = data.map((festa) =>{
        return{
            params:{
                festaId:`${festa._id}`,
            }
        }
    })
    console.log("--------------------------------------------------------------------------")
    console.log("Esse é o params de getStaticPath")
    console.log("--------------------------------------------------------------------------")
    console.log(paths)
    return{paths, fallback: false}
}


export default function festaDados({ festa }) {
    return (
        <>
            <div className={styles.box}>
                <h1 >Dados da festa {festa.id}</h1>
                <p>Título: {festa.nome}</p>
                <p>Dia do Evento: {festa.idade}</p>
                <p>Valor da Festa: R$ {festa.salario}</p>
            </div>
            <div className={styles.box2}>
                <Link href="/views" className={styles.button}>
                    <p className="voltar">Voltar</p>
                </Link>
            </div>

        </>
    )
}


