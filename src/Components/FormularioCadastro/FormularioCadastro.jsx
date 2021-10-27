import React from "react";
import DadosEntrega from "./DadosEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro(props) {
  return (
    <>
      <DadosPessoais {...props} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}
