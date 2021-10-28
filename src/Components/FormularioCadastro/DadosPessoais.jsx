import React, { useContext, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../Contexts/ValidacoesCadastro";
import useErros from "../../Hooks/UseErro";
function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) aoEnviar({ nome, lastName, cpf, promo, news });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.name.valido}
        helperText={erros.name.texto}
        fullWidth
        variant="outlined"
        margin="normal"
        label="Nome"
        id="name"
        name="name"
        required
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
        name="sobrenome"
        required
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
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

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}
export default DadosPessoais;
