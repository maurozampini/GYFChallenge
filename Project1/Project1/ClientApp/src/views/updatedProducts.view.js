import React from 'react'
import DrawerAppBar from '../components/AppBar/DrawerAppBar';
import Container from '@mui/material/Container';
import UpdateProducts from '../pages/UploadProducts/UpdateProducts';

const UpdateProductsView = () => {
  return (
    <div>
      <header>
        <DrawerAppBar />
      </header>
      <div>
        <Container maxWidth="false">
          <UpdateProducts />
        </Container>
      </div>
    </div>
  )
}

export default UpdateProductsView