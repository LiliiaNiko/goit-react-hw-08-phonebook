import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  border-color: silver;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100px;
  margin: auto;
  color: dimgrey;
  font-weight: bold;
  &:hover,
  &:focus {
  background-color: rgba(255, 255, 128, .5);
  border-radius:5px;
  border-color: none;
`;

export const Label = styled.label`
  color: grey;
`;
