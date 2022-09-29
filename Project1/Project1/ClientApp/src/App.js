import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import DrawerAppBar from './components/AppBar/DrawerAppBar';

function App() {
    return (
        <div>
            <DrawerAppBar />
            <Container maxWidth={false}>
                <Typography variant="h3" sx={{ my: 2 }}>
                    Guía de uso
                </Typography>
                <Typography variant="h5" sx={{ my: 2 }}>
                    • Ir a "VENDER PRODUCTOS" para ver la tabla de productos e ingresar un presupuesto para su filtrado
                </Typography>
                <Typography variant="h5" sx={{ my: 2 }}>
                    • Para el ABM de productos, diríjase a "CARGAR PRODUCTOS"
                </Typography>
                <Typography variant="h5" sx={{ my: 2 }}>
                    Gracias, vuelvas prontos :)
                </Typography>
            </Container>
        </div>
    );
}

export default App;
