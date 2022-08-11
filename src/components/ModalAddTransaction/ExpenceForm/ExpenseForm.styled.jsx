import styled from 'styled-components';
import { Field } from 'formik';

export const SelectContainer = styled.div`
  margin-bottom: 40px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ArrowSvg = styled.img`
  position: absolute;
  pointer-events: none;
  right: 20px;
  width: 18px;
  height: 9px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 40px;
  }
`;

export const FieldSelect = styled(Field)`
  width: 100%;
  height: 34px;
  appearance: none;
  border: none;
  outline: none;
  padding-left: 20px;

  option {
    border: none;
    border-radius: 5px;
  }
`;

export const InputSum = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  cursor: pointer;
  outline: none;

  ::placeholder {
    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #bdbdbd;
  }
`;

export const TextAreaComment = styled.textarea`
  position: relative;
  display: block;
  padding-left: 20px;
  width: 100%;
  resize: none;
  border: none;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  height: 4em;
  resize: inherit;

  ::placeholder {
    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    height: 2.3em;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  max-width: 320px;
  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #bdbdbd;
  }

  div.input {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const InputDate = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  outline: none;
`;
