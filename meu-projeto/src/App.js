// import logo from './logo.svg';
import './App.css';

// Função principal que faz tudo acontecer
function App() {
  var nome = 'Asael'
  var nomeUpper = nome.toUpperCase()
  // var btn = document.querySelector('button')

  function soma(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <h2>Alterando JSX</h2>
      <h2>Olá {nomeUpper}</h2>
      <h2>Soma: {soma(2, 3)}</h2>

    </div>
  );
}

export default App;
