import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../Contexts/ValidacoesCadastro";
import useErros from "../../Hooks/UseErro";
function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) aoEnviar({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="email"
        fullWidth
        variant="outlined"
        margin="normal"
        label="E-mail"
        id="email"
        required
      />
      <TextField
        value={password}
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.password.valido}
        helperText={erros.password.texto}
        fullWidth
        variant="outlined"
        margin="normal"
        label="Senha"
        id="senha"
        name="password"
        required
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}
export default DadosUsuario;
