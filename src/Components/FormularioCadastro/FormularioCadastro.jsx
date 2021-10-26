import React from "react";
import Button from "@material-ui/core/Button";
export function FormularioCadastro(){
    return (
        <form>
            <label for="nome">Nome</label>
            <input type="text" name="nome"/>
            
            <label for="cpf">CPF</label>
            <input type="text" name="cpf"/>

            <label for="promocoes">Promoções</label>
            <input type="checkbox" name="promocoes"/>

            <label for="novidades">Novidades</label>
            <input type="checkbox" name="novidades"/>

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}