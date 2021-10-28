import "./App.css";
import { FormularioCadastro } from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./Models/cadastro";
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
      <FormularioCadastro
        aoEnviar={aoEnviarForm}
        validacoes={{
          cpf: validarCPF,
          password: validarSenha,
          name: validarSenha,
        }}
      />
    </Container>
  );
}

export default App;
