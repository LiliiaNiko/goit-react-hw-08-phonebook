import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto;
`;

export const Input = styled.input`
  margin-top: 15px;
  margin-left: 10px;
  border-color: silver;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100px;
  margin: auto;
  margin-top: 10px;
  font-weight: bold;
  color: dimgrey;
  &:hover,
  &:focus {
  background-color: rgb(255, 255, 128);;
  border-radius:5px;
  border-color: none;
`;

export const Label = styled.label`
  margin-right: 5px;
  color: grey;
`;
