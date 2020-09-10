import React from 'react';
import { Container, Text } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

const Dashboard: React.FC = () => (
  <>
    <Header />
    <Container>
      <Card />
    </Container>
  </>
);

export default Dashboard;
