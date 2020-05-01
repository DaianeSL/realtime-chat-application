import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const spin = keyframes`
  to {
    transform: rotate(0);
  }
  from{
    transform: rotate(80deg);
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.pink};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RoomName = styled.div`
  flex: 1;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.normal};
`;

export const Close = styled(Link)`
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  transition: 0.3s;
  &:hover {
    animation: ${spin} 0.3s ease;
  }
  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 10px;
    background: #fff;
    top: 5px;
    left: 50%;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 10px;
    background: #fff;
    top: 5px;
    left: 50%;
    transform: rotate(-45deg);
  }
`;
