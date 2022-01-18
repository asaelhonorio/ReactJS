import './App.css';
// import HelloWorld from './components/HelloWorld';
// import PraticProps from './components/PraticProps';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';
// import UseState from './components/UseState';
// import Button from './components/evento/Button';
// import Condicional from './components/Condicional';
import RenderList from './components/RenderList';
import SeuNome from './components/SeuNome';
import { useState } from 'react'
import Saudacao from './components/Saudacao';

// Função principal que faz tudo acontecer
function App() {
  /*  
    var nome = 'Asael'
    var nomeUpper = nome.toUpperCase()
  
  
    function soma(a, b) {
      return a + b
    }
  
    return (
      <div className="App">
        <h1>Olá mundo!</h1>
        <p>Alterando JSX</p>
        <p>Olá {nomeUpper}</p>
        <p>Soma: {soma(2, 3)}</p>
        <HelloWorld />
  
        <PraticProps nome='Lucas' />
  
        <Pessoa nome='Pedro' idade='23' profissao='Programador' foto='https://via.placeholder.com/150' />
        <List />
  
        <h3>======== TESTANDO EVENTOS=======</h3>
        <Evento />
  
        <Form />
        <h3>========== USE STATE ===========</h3>
        <UseState />
  
        <h3>========== CONDITION ===========</h3>
        <Condicional />
      </div>
  
    );
  */
  // RENDERIZAÇÃO DE LISTA
  /*    const meusItens = ['html5','css3','javaScript','react']
      return(
        <div className='App'>
          <h1>Renderização de lista</h1>
          <RenderList/>
        </div>
      )
  */

  // STATE LIFT
  const [nome, setNome] = useState()

  return (
    <div>
      <h1>Utilizando StateLift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}

export default App;
