import styled from 'styled-components/native';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.View`
  background-color: #5636d3;
  width: 375px;
  padding: ${({ size }) =>
    size === 'small' ? '24px 24px ' : '24px 24px 150px'};
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  margin-right: 16px;
  color: #fff;
  font-size: 14px;
  line-height: 21px;
  opacity: 0.6;
  font-family: 'Poppins-Regular';
`;
