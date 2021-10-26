import React, { useState, useEffect } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

export function FormularioCadastro() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
        console.log(lastName);
      }}
    >
      <TextField
        onChange={(event) => {
          setName(event.target.value);
        }}
        fullWidth
        variant="outlined"
        margin="normal"
        label="Nome"
        id="nome"
      />
      <TextField
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        fullWidth
        variant="outlined"
        margin="normal"
        label="Sobrenome"
        id="sobrenome"
      />
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="CPF"
        id="cpf"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
