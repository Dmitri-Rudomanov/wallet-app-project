import plus from '../../assets/images/plusIcon.svg';
import { Container } from './ButtonAddTransitions.styled';

export const ButtonAddTransactions = ({ onModal }) => {
  return (
    <>
      <Container onClick={onModal}>
        <img src={plus} alt="plus" />
      </Container>
    </>
  );
};
