import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Navbar from "../../components/Navbar";

const PokemonDetails = () => {
  // Data
  const router = useRouter();

  const { pokemonName } = router.query;

  // States
  const [pokemon, setPokemon] = useState();

  // Functions
  const getPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    setPokemon(response.data);
  };

  // Effects
  useEffect(() => {
    getPokemon();
  }, []);

  // Detalle de Pokemon
  return pokemon ? (
    <>
      <div>
        <Navbar />
        <Grid sx={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="auto"
              image={pokemon.sprites.other.home.front_shiny}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textTransform: "capitalize" }}
              >
                {pokemon.name}
              </Typography>
              <p>Peso: {pokemon.weight}kg</p>
              <p>Altura: {pokemon.height}mts</p>
              <p className="capitalize">Especie: {pokemon.species.name}</p>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">
                Share
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
        </Grid>
      </div>
    </>
  ) : (
    <h3>Cargando...</h3>
  );
};

export default PokemonDetails;
