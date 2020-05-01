import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputText = styled.input`
  padding: 10px;
  flex: 1;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: none;
`;

export const Button = styled.button`
  border-radius: none;
  width: 80px;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
`;
