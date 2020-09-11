import React from 'react';

import sales from '../../assets/sales.png';

import {
  Container,
  CardContent,
  Title,
  Footer,
  Income,
  Outcome,
  Type,
  Icon,
  Description,
} from './styles';

interface Transaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

const TransactionCard: React.FC<Transaction> = ({
  title,
  type,
  value,
  category,
}: Transaction) => (
  <Container>
    <CardContent>
      <Title>{title}</Title>
      {type === 'income' ? (
        <Income>R$ {value},00 </Income>
      ) : (
        <Outcome>R$ - {value},00 </Outcome>
      )}
      <Footer>
        <Type>
          <Icon source={sales} />
          <Description>{category}</Description>
        </Type>

        <Description>16 de abril</Description>
      </Footer>
    </CardContent>
  </Container>
);

export default TransactionCard;
