import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 300px;
  height: 128px;
  border-radius: 5px;
  justify-content: center;
  align-self: center;
  margin-bottom: 16px;
`;

export const CardContent = styled.View`
  padding: 24px 24px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;
`;

export const Value = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  color: #12a454;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin: 24px 0px;
`;

export const Icon = styled.Image`
  margin-right: 16px;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  color: #969cb3;
`;
