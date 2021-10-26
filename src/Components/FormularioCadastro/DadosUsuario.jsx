import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export function DadosUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ email, password });
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
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
