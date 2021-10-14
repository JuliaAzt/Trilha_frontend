import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente transação de extrato', () => {
      it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const {container} = render(<Transacao data="10/10/2020" tipo="saque" valor="10.10"/>);
        expect(container.firstChild).toMatchSnapshot();
      })
})

