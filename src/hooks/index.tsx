import React from 'react';
import { TransactionProvider } from './transactions';

const AppContext: React.FC = ({ children }) => (
  <TransactionProvider>{children}</TransactionProvider>
);

export default AppContext;
