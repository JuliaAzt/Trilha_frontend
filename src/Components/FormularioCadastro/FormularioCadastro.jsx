import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export function FormularioCadastro(){
    return (
        <form>
            <TextField fullWidth variant="outlined" margin="dense" label="Nome" id="nome"/> 
            <TextField fullWidth variant="outlined" margin="dense" label="Sobrenome" id="sobrenome"/> 
            <TextField fullWidth variant="outlined" margin="dense" label="CPF" id="cpf"/> 

            <label for="promocoes">Promoções</label>
            <input type="checkbox" name="promocoes"/>

            <label for="novidades">Novidades</label>
            <input type="checkbox" name="novidades"/>

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}