import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

export function FormularioCadastro() {
  return (
    <form>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="Nome"
        id="nome"
      />
      <TextField
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
