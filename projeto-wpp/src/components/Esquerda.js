import Contatos from './Contatos'
import styles from './Esquerda.module.css'

import Profile from './Profile'
import Search from './Search'

function Esquerda() {
    return (
        <div className={styles.divEsquerda}>
            <Profile/>
            <Search/>
            <Contatos/>
        </div>
    )
}

export default Esquerda