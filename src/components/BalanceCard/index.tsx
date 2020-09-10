import React from 'react';

import {
  Container,
  CardContent,
  Title,
  Header,
  Value,
  Icon,
  Description,
} from './styles';

interface BalanceCardProps {
  total?: boolean;
  title: string;
  value: string;
  icon: object;
  date: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  total = false,
  title,
  value,
  icon,
  date,
}: BalanceCardProps) => {
  return (
    <Container total={total}>
      <CardContent>
        <Header>
          <Title total={total}>{title}</Title>
          <Icon total={total} source={icon} />
        </Header>
        <Value total={total}>R$ {value}</Value>
        <Description total={total}>Última entrada dia {date}</Description>
      </CardContent>
    </Container>
  );
};

export default BalanceCard;
