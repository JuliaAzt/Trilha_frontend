import "./App.css";
import { FormularioCadastro } from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha, validarNome } from "./Models/cadastro";
import ValidacoesCadastro from "./Contexts/ValidacoesCadastro";
function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };

  return (
    <Container component="article" maxWidth="sm" className="margin-t">
      <Typography
        variant="h4"
        align="center"
        color="#1565c0"
        className="header-title"
      >
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, password: validarSenha, name: validarNome }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default App;
