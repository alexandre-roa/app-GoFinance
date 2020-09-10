import React from 'react';
import { Container, Title } from './styles';
import Header from '../../components/Header';
import BalanceCard from '../../components/BalanceCard';
import TransactionCard from '../../components/TransactionCard';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard: React.FC = () => (
  <>
    <Header />

    <Container>
      <BalanceCard />
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
