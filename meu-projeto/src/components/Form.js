import { useState } from 'react'

function Form() {

    /*function cadastrar(){
        console.log('Usuário Cadastrado!')
    }*/
    function cadastrar(e) {
        e.preventDefault();
        console.log(name)
        console.log(`Usuário Cadastrado!`)
    }

    const [name, setName] = useState()

    return (
        <div>
            <h3>Meu cadastro:</h3>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id='name' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id='senha' placeholder='Digite a sua senha' />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form