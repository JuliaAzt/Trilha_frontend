import "./App.css";
import { FormularioCadastro } from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };

  const validaCPF = (cpf, error) => {
    let errorObj = { ...error };
    errorObj.cpf.valid = cpf.length === 11;
    return errorObj;
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacaoCPF={validaCPF} />
    </Container>
  );
}

export default App;
