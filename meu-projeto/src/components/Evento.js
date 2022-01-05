import styles from './Evento.module.css'
import Button from './evento/Button'
import PraticProps from './PraticProps'

function Evento() {

    function clicar() {
        alert('Funcionou!')
    }
    function primeiroEvento(){
        alert('Ativando primeiro evento')
    }
    function segundoEvento(){
        alert('Ativando segundo evento')
    }
    
    return (
        <div>
            <h3>=========== Eventos =========</h3>
            <p className={styles.pClick}>Clique no botão abaixo</p>
            <button onClick={clicar}>Clique aqui</button>

            <h3>======= METODOS POR PROPS =======</h3>
            <Button event={primeiroEvento} text='Primeiro evento'/>
            <Button event={segundoEvento} text='Segundo evento'/>

        </div>
    )
}
export default Evento