import styles from './Evento.module.css'

function Evento() {

    function clicar() {
        alert('Funcionou!')
    }

    return (
        <div>
            <h3>=========== Eventos =========</h3>
            <p className={styles.pClick}>Clique no botão abaixo</p>
            <button onClick={clicar}>Clique aqui</button>
        </div>
    )
}
export default Evento