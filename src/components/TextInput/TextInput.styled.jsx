import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding-left: 12.5px;
  border-bottom: 1px solid #e0e0e0;
  color: #bdbdbd;
  margin-top: 40px;

  &:hover,
  &:focus,
  &:focus-within {
    border-bottom: 1px solid var(--green);
  }
`;

export const Input = styled.input`
  border: none;
  outline-style: none;
  padding-left: 25px;
  width: 250px;
  height: 35px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  &::placeholder {
    color: var(--secondary);
  }
  &:hover,
  &:focus,
  &:focus-within {
    background-color: invert(0) sepia(0);
  }

  @media screen and (min-width: 768px) {
    width: 410px;
  }
  &::-ms-reveal {
    display: none;
  }
`;
