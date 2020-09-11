/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Title, Balance, TransactionsContainer } from './styles';
import Header from '../../components/Header';
import BalanceCard from '../../components/BalanceCard';
import TransactionCard from '../../components/TransactionCard';
import { useTransaction } from '../../hooks/transactions';

import income from '../../assets/income.png';
import outcome from '../../assets/outcome.png';
import dollar from '../../assets/dollar.png';

const Dashboard: React.FC = () => {
  const { balance, transactions, getTransactions } = useTransaction();

  useEffect(() => {
    try {
      getTransactions();
    } catch (err) {
      console.log(err);
    }
  }, [getTransactions]);
  return (
    <>
      <Header />

      <Container>
        <Balance
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
        >
          <BalanceCard
            title="Entradas"
            icon={income}
            value={balance.income}
            date={'16 de abril'}
          />
          <BalanceCard
            title="Saídas"
            icon={outcome}
            value={balance.outcome}
            date="16 de abril"
          />
          <BalanceCard
            total
            title="Total"
            icon={dollar}
            value={balance.total}
            date="16 de abril"
          />
        </Balance>

        <TransactionsContainer contentContainerStyle={{ paddingVertical: 24 }}>
          <Title>Listagem</Title>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            data={transactions}
            horizontal={false}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TransactionCard
                key={item.id}
                title={item.title}
                type={item.type}
                value={item.value}
                category={item.category.title}
                date={item.created_at}
              />
            )}
          />
        </TransactionsContainer>
      </Container>
    </>
  );
};

export default Dashboard;
