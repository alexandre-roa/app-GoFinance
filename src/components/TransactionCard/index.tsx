import React from 'react';

import sales from '../../assets/dollar.png';

import {
  Container,
  CardContent,
  Title,
  Footer,
  Value,
  Type,
  Icon,
  Description,
} from './styles';

const BalanceCard: React.FC = () => (
  <Container>
    <CardContent>
      <Title>Desenvolvimento de site</Title>
      <Value>R$ 12.000,00</Value>
      <Footer>
        <Type>
          <Icon source={sales} />
          <Description>Vendas</Description>
        </Type>

        <Description>13/04/2020</Description>
      </Footer>
    </CardContent>
  </Container>
);

export default BalanceCard;
