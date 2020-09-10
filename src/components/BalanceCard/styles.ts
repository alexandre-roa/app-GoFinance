import styled from 'styled-components/native';

interface CardProps {
  total?: boolean;
}
export const Container = styled.View`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  width: 300px;
  height: 200px;
  border-radius: 5px;
  justify-content: center;
  margin-right: 8px;
`;

export const CardContent = styled.View`
  padding: 16px 24px;
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
`;

export const Icon = styled.Image``;

export const Value = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 30px;
  line-height: 45px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#969cb3')};
  margin-bottom: 48px;
`;
