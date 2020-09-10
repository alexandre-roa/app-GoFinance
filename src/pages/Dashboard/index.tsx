import React from 'react';
import { Container, Title, Balance } from './styles';
import Header from '../../components/Header';
import BalanceCard from '../../components/BalanceCard';
import TransactionCard from '../../components/TransactionCard';
import { ScrollView } from 'react-native-gesture-handler';

import income from '../../assets/income.png';
import outcome from '../../assets/outcome.png';
import dollar from '../../assets/dollar.png';

const Dashboard: React.FC = () => (
  <>
    <Header />

    <Container>
      <Balance
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <BalanceCard
          title="Entradas"
          icon={income}
          value={800}
          date="16 de abril"
        />
        <BalanceCard
          title="Saídas"
          icon={outcome}
          value={800}
          date="16 de abril"
        />
        <BalanceCard
          total
          title="Total"
          icon={dollar}
          value={800}
          date="16 de abril"
        />
      </Balance>
      <ScrollView>
        <Title>Listagem</Title>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </ScrollView>
    </Container>
  </>
);

export default Dashboard;
