import "./App.css";
import { FormularioCadastro } from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );
}

export default App;
