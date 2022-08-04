import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PokeCard from "../components/PokeCard";

export default function Home() {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=25',
    )

    setPokemons(response.data.results)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <Navbar />
      <h1>Listado de Pokemons</h1>

      <ul>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
    </>
  );
}
