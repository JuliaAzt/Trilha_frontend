import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";
function DadosEntrega({ aoEnviar }) {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, cidade, estado, numero });
      }}
    >
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              value={numero}
              onChange={(event) => {
                setNumero(event.target.value);
              }}
              id="numero"
              label="Numero"
              type="number"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={cep}
              onChange={(event) => {
                setCEP(event.target.value);
              }}
              id="cep"
              label="CEP"
              type="number"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              value={estado}
              onChange={(event) => {
                setEstado(event.target.value);
              }}
              id="estado"
              label="Estado"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={cidade}
              onChange={(event) => {
                setCidade(event.target.value);
              }}
              id="cidade"
              label="Cidade"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
