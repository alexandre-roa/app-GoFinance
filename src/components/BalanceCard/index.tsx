import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  CardContent,
  Title,
  Header,
  Value,
  Description,
} from './styles';

import income from '../../assets/income.png';

const BalanceCard: React.FC = () => (
  <Container>
    <CardContent>
      <Header>
        <Title>Entradas</Title>
        <Image source={income} />
      </Header>
      <Value>R$ 17.400,00</Value>
      <Description>Última entrada dia 13 de abril</Description>
    </CardContent>
  </Container>
);

export default BalanceCard;
