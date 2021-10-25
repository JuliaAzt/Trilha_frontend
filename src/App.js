import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import './App.css';
class App extends Component {

  constructor(){
    super();
    this.notas = [];

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
    console.log(this.notas.length);
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;