import React, { useState, useEffect } from "react";
import { NextPage } from 'next';
// import Grid from "@mui/material/Grid";
import axios from "axios";
import Navbar from "../components/Navbar";
import PokeCard from "../components/PokeCard";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";


export default function Home() {
  //const [productos, setProductos] = useState([]);
  const [pokemons, setPokemons] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon?limit=4")
  //     .then((response) => setProductos(response.data.results))
  //     .catch((error) => console.log(error));
  // }, []);

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
      {/* <Grid container spacing={2} p="20px 24px">
        {productos.map((producto) => (
          <Grid key={producto.id} item xs={12} sm={6} md={3} xl={3}>
            <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${producto.id}.png`}
                  alt={producto.description}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {producto.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {producto.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined">{producto.price}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </>
  );
}
