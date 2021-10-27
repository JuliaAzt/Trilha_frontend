import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, password });
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
        fullWidth
        variant="outlined"
        margin="normal"
        label="Senha"
        id="senha"
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default DadosUsuario;
