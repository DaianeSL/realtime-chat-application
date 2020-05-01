import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

export const ScrollContainer = styled(ScrollToBottom)`
  height: 300px;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;

export const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  ${({ theme }) => `
    background-color: ${theme.colors.pink};
  `}
`;

export const ContainImg = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
`;

export const Img = styled.img`
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;
  ovject-fit: cover;
`;

export const Name = styled.h3`
  ${({ theme }) => `
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.small};
  `}
`;
export const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const List = styled.ul`
  padding: 10px;
  list-style-type: none;
  display: block;
  margin: 0;
`;

export const Item = styled.li`
  display: block;
  padding: 5px;
`;

export const Title = styled.h2`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.normal};
    color: ${theme.colors.white};
    font-weight: normal;
  `}
`;

export const Container = styled.div`
  display: block;
  width: 200px;
  position: relative;
  z-index: 1;
  transition: 0.5s ease-in;
  border-top-right-radius: 8px;
  overflow: hidden;
  ${({ theme, open }) => `
    background-color: ${theme.colors.white};

    @media screen and (min-width: 769px) {
      ${!open ? `margin-left: -160px;` : ``}
    }
    @media screen and (max-width: 768px) {
      border-top-left-radius: 8px;
      ${!open ? `margin-bottom: -150px;` : ``}
    }
  `}
`;

export const CloseButton = styled.button`
  margin-left: auto;
  width: 20px;
  height: 20px;
  right: 0;
  background: transparent;
  border: none;
  position: relative;
  transition: 0.3s;
  ${({ open }) => (!open ? `transform: rotate(45deg);` : `transform: rotate(0);`)}
  &:after {
    content: '';
    width: 2px;
    height: 10px;
    position: absolute;
    left: calc(50% - 1px);
    background: white;
    top: 5px;
    transform: rotate(45deg);
  }
  &:before {
    content: '';
    width: 2px;
    height: 10px;
    position: absolute;
    left: calc(50% - 1px);
    background: white;
    top: 5px;
    transform: rotate(-45deg);
  }
`;
