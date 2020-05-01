import styled, { keyframes } from 'styled-components';

const apear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  juctify-content: center;
  align-items: center;
  margin: 6px 0;
  ${({ isAuthor }) =>
    isAuthor &&
    `
    flex-direction: row-reverse;
  `}
`;

export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 100%;
  overflow: hidden;
  ${({ isAdmin, theme }) =>
    isAdmin &&
    `
  border: 2px solid ${theme.colors.pink};
  
  `}
`;

export const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.smaller};
  position: absolute;
  width: 100px;
  line-height: 10px;
`;

export const TextWrapper = styled.div`
  animation: ${apear} 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  padding: 10px;
  position: relative;
  border-radius: 4px;
  background-color: ${({ isAuthor, theme }) =>
    isAuthor ? theme.colors.purple : theme.colors.pink};
  word-break: break-all;
  &:before {
    content: '';
    position: absolute;

    top: calc(50% - 8px);
    width: 0;
    height: 0;
    border-right: 10px solid
      ${({ isAuthor, theme }) => (isAuthor ? theme.colors.purple : theme.colors.pink)};
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    ${({ isAuthor }) => (isAuthor ? `right: -9px;transform: rotate(180deg);` : `left: -9px;`)}
  }
  ${({ isAuthor, theme }) =>
    isAuthor
      ? `${Name} { right: calc(100% + 10px); text-align: right; color: ${theme.colors.purple}}`
      : `${Name} { left: calc(100% + 10px); color: ${theme.colors.pink}}`}
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  max-width: 300px;
`;
