import styles from './UseState.module.css'
import { useState } from 'react'

function UseState() {

    const [numero, setNumero] = useState(0)
    function aumentar(){
        setNumero((prevState) => prevState + 1)
    }
    function diminuir(){
        setNumero((prevState) => prevState - 1)
    }

    return (
        <div className={styles.divState}>
            <h1>{numero}</h1>
            <button className={styles.btn1} onClick={aumentar}>+</button>
            <button className={styles.btn2} onClick={diminuir}>-</button>
        </div>
    )
}

export default UseState