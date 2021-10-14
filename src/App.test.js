import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {calcularNovoSaldo} from './App';

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {
    it('O nome é exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })

    it('O saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })

    it('O botão de realizar transação é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })

  describe('Quando eu faço uma transação', ()=> {
      it('Se for do tipo saque, o saldo irá diminuir', () => {
        const valores = {
            transacao: 'saque',
            valor: 100
        } 
        expect(calcularNovoSaldo(valores,200)).toBe(100);
      })

      it('Se for do tipo depósito, o saldo irá aumentar', () => {
        const valores = {
            transacao: 'deposito',
            valor: 100
        } 
        expect(calcularNovoSaldo(valores,200)).toBe(300);
    })
  })
})