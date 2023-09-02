import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const pokeList = pokemon.map(poke => 
    <PokemonCard key={pokemon.id} poke={poke} />)


  return (
    <Card.Group itemsPerRow={6}>
      {pokeList} 
    </Card.Group>
  );
}

export default PokemonCollection;
