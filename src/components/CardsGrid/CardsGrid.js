import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardsGrid = ({ pokemons, handleCardClick }) => {
  const pokemonCards = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleCardClick={handleCardClick}/>
  ))
  return <CardsGridWrapper>{pokemonCards}</CardsGridWrapper>
}

const CardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`

export default CardsGrid
