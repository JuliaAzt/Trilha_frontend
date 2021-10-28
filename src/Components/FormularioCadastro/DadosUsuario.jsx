import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErros] = useState({ password: { valido: true, texto: "" } });

  const validarCampos = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  };
  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  };
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
