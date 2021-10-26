import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

export function FormularioCadastro() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
        console.log(lastName);
        console.log(cpf);
        console.log(promo);
        console.log(news);
      }}
    >
      <TextField
        value={name}
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
        value={lastName}
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
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        fullWidth
        variant="outlined"
        margin="normal"
        label="CPF"
        id="cpf"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promo ?? ""}
            onChange={(event) => {
              setPromo(event.target.checked);
            }}
            name="promo"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="News"
        control={
          <Switch
            checked={news ?? ""}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="news"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
