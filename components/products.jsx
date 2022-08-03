import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios
        .get('https://peticiones.online/api/products')
        .then(response => setProductos(response.data.results))
        .catch(error => console.log(error));
    }, []);

    return <div className='productos'>
        {productos.map(producto => (
            <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              component="img"
              height="auto"
              image={ producto.image }
              alt={ producto.description}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { producto.description }
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined">{producto.price}</Button>
              
            </CardActions>
          </Card>
        ))}
        
    </div>;
}

export default Products;