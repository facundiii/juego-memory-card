import React from 'react';
import styled from 'styled-components';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <ScoreboardWrapper>
      <Title>Juego Memory Card<br></br>
         Facundo Fernandez, Pablo Zabala, Lucas Marchesín, Lorenzo Costa
      </Title>
      <ScoreContainers>
        <Score>Resultado: {currentScore}</Score>
        <Score>Mejor resultado: {bestScore}</Score>
      </ScoreContainers>
    </ScoreboardWrapper>
  );
};

const ScoreboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 69rem;

  @media (max-width: 750px) {
    width: 250px;
    gap: 3rem;
  }
`;

const ScoreContainers = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Score = styled.div`
  padding: 0.5rem;
  width: 35%;
  font-size: 2rem;
  border-radius: 20px;
  font-weight: 700;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 750px) {
    width: 100%;
  }

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`;

export default Scoreboard;
