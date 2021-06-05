import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((r) => r.json())
      .then((data) => setPokemons(data));
  }, []);
  const filteredPokemons = pokemons.filter((pokemon) => {
    if (searchText === "") return true;
    if (pokemon.name.toLowerCase().startsWith(searchText.toLowerCase()))
      return true;
    return false;
  });
  function addNewPokemon(pokemon) {
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    })
      .then((r) => r.json())
      .then((data) => setPokemons([...pokemons, data]));
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon} />
      <br />
      <Search setSearch={setSearchText} searchText={searchText} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
