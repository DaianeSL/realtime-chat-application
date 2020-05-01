import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height 100vh;
  background-color: #0F0526;
`;

export const Wrap = styled.div`
  width: 800px;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ChatContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 450px;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  position: relative;
  z-index: 2;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.24);
  max-width: 100%;
`;

export const ErrorContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: block;
  margin: 0 auto;
`;

export const Error = styled.p`
  width: 300px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  padding-bottom: 10px;
`;

export const Img = styled.img`
  display: block;
  width: 300px;
  max-width: 100%;
  margin: 0;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 300px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.pink};
  margin-top: 10px;
  text-align: center;
`;
