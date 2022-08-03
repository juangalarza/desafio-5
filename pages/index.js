import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Navbar from '../components/Navbar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://peticiones.online/api/products")
      .then((response) => setProductos(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Navbar />
      <Grid container spacing={2} p="20px 24px">
        { productos.map((producto) => (
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardMedia
                component="img"
                height="auto"
                image={producto.image}
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
      </Grid>
    </>
  );
}
