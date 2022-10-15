import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-left: 20px;
  color: dimgrey;
  font-weight: bold;
  &:hover,
  &:focus {
  background-color: rgb(255, 255, 128);;
  border-radius:5px;
  border-color: none;
`;

export const UserName = styled.p`
  color: grey;
  font-weight: bold;
`;
