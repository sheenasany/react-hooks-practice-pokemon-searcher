import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [searchPoke, setSearchPoke] = useState("")

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])
  
  const filteredPoke = pokemon
  .filter(poke => poke.name.toLowerCase().includes(searchPoke.toLowerCase()))
  .sort((poke1, poke2) => poke1.id - poke2.id)

  const addNewPoke = (newPoke) => {
    setPokemon([...pokemon, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke} />
      <br />
      <Search setSearchPoke={setSearchPoke} />
      <br />
      <PokemonCollection pokemon={filteredPoke} />
    </Container>
  );
}

export default PokemonPage;
