import './App.css';
import HelloWorld from './components/HelloWorld';
import PraticProps from './components/PraticProps';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

// Função principal que faz tudo acontecer
function App() {
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

      {/*======== TESTANDO EVENTOS=======*/}
      <Evento/>

      <Form/>

    </div>

  );
}

export default App;
