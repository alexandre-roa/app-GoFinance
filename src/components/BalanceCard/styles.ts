import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  justify-content: center;
  margin-top: -114px;
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
  color: #363f5f;
`;

export const Value = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 30px;
  line-height: 45px;
  color: #363f5f;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  color: #969cb3;
  margin-bottom: 48px;
`;
