import styles from '@/styles/inputText/inputText.module.css'
const InputText = (props) => {

   
   const Digitado = (evento) => {
      props.Alterado(evento.target.value)
   }

   return (
      <div className={styles['campo-texto']}>
         <label className={styles.label}>{props.label}</label>
         <input
            className={styles.input}
            value={props.valor}
            onChange={Digitado}
            required={props.obrigatorio}
            placeholder={props.placeholder}
         />
      </div>
   )
}
 
 export default InputText