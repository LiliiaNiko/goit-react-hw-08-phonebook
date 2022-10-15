import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  margin-left: 280px;
`;

export const ListItem = styled.li`
  margin-right: 16px;
  margin-bottom: 10px;
  color: grey;
`;

export const Button = styled.button`
  margin-bottom: 10px;
  color: dimgrey;
  font-weight: bold;
  &:hover,
  &:focus {
  background-color: rgba(255, 255, 128, .5);
  border-radius:5px;
  border-color: none;
`;
