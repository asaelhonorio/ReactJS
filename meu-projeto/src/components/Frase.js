import styles from './Frase.module.css'

function Frase(){
    return (
        <div className={styles.FraseDiv}>
            <p className={styles.FraseTxt}>Este é um componente com frase</p>
        </div>
    )
}

export default Frase