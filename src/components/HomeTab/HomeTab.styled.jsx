import styled from 'styled-components';
import { TRANSACTION_TYPES } from './table-helpers';

export const Tab = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 60vh;
  }

  /* @media screen and (min-width: 1280px) {
  } */
  td {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const TabMobile = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: table;
  width: 280px;
  table-layout: fixed;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TableBodyMobile = styled.tbody`
  position: relative;
  width: 280px;
  table-layout: fixed;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Table = styled.table`
  display: none;
  border-spacing: 0px;
  width: 710px;
  table-layout: fixed;
  overflow: hidden;
  word-wrap: break-word;
  padding: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: table;
  }
`;

export const TableMobile = styled.table`
  background: #ffffff;
  opacity: 0.8;
  border-radius: 10px;
  margin-bottom: 10px;
  table-layout: fixed;
  width: 280px;
  word-wrap: break-word;
  ${props =>
    props.type === TRANSACTION_TYPES.add
      ? `border-left: 5px solid #24cca7`
      : `border-left: 5px solid #ff6596;`}
`;

export const TableHeader = styled.thead`
  background: #ffffff;
  th:first-child {
    background: #ffffff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  th:last-child {
    background: #ffffff;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  th {
    padding: 10px 0;
    text-align: center;
  }
`;

export const ColumnHeader = styled.th`
  font-size: 18px;
  line-height: 27px;
  @media screen and (max-width: 768px) {
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const ColumnHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnHeaderMobile = styled.td`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  border-bottom: 1px solid #dcdcdf;
  text-align: left;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Column = styled.td`
  font-size: 16px;
  font-weight: 400;
  height: 54px;
  line-height: 1.5;
  word-wrap: break-word;
  color: #000;
  :nth-child(5) {
    ${props => {
      return props.type === TRANSACTION_TYPES.add
        ? `color: #24cca7;`
        : `color: #ff6596;`;
    }}
  }
`;

export const ColumnMobile = styled.td`
  text-align: right;
  line-height: 24px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdf;
  ${props => {
    if (props.type === TRANSACTION_TYPES.add) {
      return `color : #24cca7;`;
    } else if (props.type === TRANSACTION_TYPES.minus) {
      return `color:#ff6596;`;
    } else {
      return `color:#000;`;
    }
  }}
`;

export const Row = styled.tr`
  :last-child {
    td {
      border-bottom: 0px solid #dcdcdf;
    }
  }
`;
export const RowMobile = styled.tr`
  table-layout: fixed;
`;

export const NoTransactions = styled.div`
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    width: 700px;
    margin-top: 100px;
  }
`;

export const NoTransactionsMsg = styled.span`
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
`;

export const PaginationContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 1px 0;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const PaginationContainerMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 1px 0;
`;

export const PaginationText = styled.p`
  opacity: 0.6;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const PaginationButton = styled.button`
  color: var(--primary-text);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  border: solid 1px var(--primary-text);
  background-color: var(--blue);
  border-radius: 25%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 34px;
    width: 34px;
    font-weight: bold;
    border: solid 2px var(--blue);
  }

  &.active,
  &:hover {
    color: var(--green);
  }

  &.disabled {
    color: var(--green);
    background-color: var(--blue);
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationNumberButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 40px;
    width: 40px;
    font-weight: bold;
    border: solid 3px var(--green);
    color: var(--common-text);
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border: solid 2px var(--green);
    background-color: transparent;
    border-radius: 25%;
    cursor: pointer;

    &.active,
    &:hover {
      color: var(--green);
    }

    &.disabled {
      color: var(--green);
      background-color: var(--blue);
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
