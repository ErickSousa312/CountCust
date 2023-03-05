import styles from '@/styles/button/button.module.css'

const Button =(props)=>{
    return(
        <button className={styles.botao}>
            {props.children}
        </button>
    )
}
export default Button