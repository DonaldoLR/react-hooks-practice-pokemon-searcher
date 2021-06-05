import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const pokemonElements = pokemons.map((pokemon, idx) => {
    return <PokemonCard key={idx} pokemon={pokemon} />;
  });
  return <Card.Group itemsPerRow={6}>{pokemonElements}</Card.Group>;
}

export default PokemonCollection;
