import React from 'react';
import { Image } from 'react-native';

import Logo from '../../assets/logo.png';

import { Container, HeaderContent, Title } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <HeaderContent>
      <Image source={Logo} />

      <Title>16 de abril</Title>
    </HeaderContent>
  </Container>
);

export default Header;
