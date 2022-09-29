import React from 'react'
import DrawerAppBar from '../components/AppBar/DrawerAppBar';
import Container from '@mui/material/Container';
import SellProducts from '../pages/SellProducts/SellProducts';

const SellProductsView = () => {
    return (
        <div>
            <header>
                <DrawerAppBar />
            </header>
            <div>
                <Container maxWidth="false">
                    <SellProducts />
                </Container>
            </div>
        </div>
    )
}

export default SellProductsView
