import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validarCPF }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const [error, setError] = useState({
    cpf: { valid: true, errorMessage: "O CPF deve conter 11 digitos" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ name, lastName, cpf, promo, news });
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
        onBlur={() => {
          setError(validarCPF(cpf, error));
        }}
        error={!error.cpf.valid}
        helperText={error.cpf.valid ? "" : error.cpf.errorMessage}
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
export default DadosPessoais;
