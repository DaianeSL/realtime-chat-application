import styled from 'styled-components';

export const H1 = styled.h1`
  color: white;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 300px;
  max-width: 90%;
`;

export const Header = styled.div`
  display: block;
  passing: 10px 0;
`;

export const Alert = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 10px 0 0;
  color: red;
`;

export const Form = styled.form`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  margin: 0;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: block;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
  position: relative;
  z-index: 2;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  padding: 25px 0 15px;
  position: relative;
  z-index: 1;
  margin-top: -30px;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    right: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-top: 15px solid ${({ theme }) => theme.colors.pink};
  }
`;
