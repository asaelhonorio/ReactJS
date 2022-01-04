/*
FORMA BÁSICA DE SER USADA, POREM MAIOR
======================
function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}*/
// FORMA MAIS USADA
function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt="" />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa