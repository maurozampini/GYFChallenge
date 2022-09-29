import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProductCard from '../../components/ProductCard/ProductCard'
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import { urlProducts } from '../../endpoints/endpoints';
import SimpleBackdrop from '../../components/SimpleBackdrop/SimpleBackdrop';
import ProductCardForm from '../../components/ProductCard/ProductCardForm';
import Popup from '../../components/Popup/Popup';
import moment from 'moment'

const date = Date.now();
const initialState = {
    id: '',
    name: '',
    price: '',
    date: moment(date).toISOString(),
    category: 'PRODUNO',
    description: ''
}

const UpdateProducts = () => {
    const [open, setOpenBackdrop] = useState(true);
    const [openPopup, setOpenPopup] = useState(false);
    const [reload, setReload] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(initialState);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(urlProducts)
            .then((res) => {
                setOpenBackdrop(false);
                setItems(res.data);
            })
            .catch((error) => {
                setOpenBackdrop(false);
                console.log(error);
                alert(error.message);
            });
    }, [reload]);

    const openInPopup = () => {
        setRecordForEdit(initialState);
        setOpenPopup(true);
    }

    const addOrEdit = async (values) => {
        setOpenPopup(false);
        setOpenBackdrop(true);

        if (values.id === '') {
            await axios.post(`${urlProducts}`, values)
                .then((res) => {
                    setOpenBackdrop(false);
                    setReload(!reload);
                    console.log(res.data)
                    setRecordForEdit(initialState);
                    setOpenPopup(false);
                })
                .catch((error) => {
                    setOpenBackdrop(false);
                    alert(error.name);
                    console.log(error);
                    setOpenPopup(false);
                });
        } else {
            await axios.put(`${urlProducts}/${values.id}`, values)
                .then((res) => {
                    setOpenBackdrop(false);
                    setReload(!reload);
                    console.log(res.data)
                    setRecordForEdit(initialState);
                    setOpenPopup(false);
                })
                .catch((error) => {
                    setOpenBackdrop(false);
                    alert(error.message);
                    console.log(error);
                    setOpenPopup(false);
                });
        }
    }

    const deleteRecord = async (id) => {
        setOpenBackdrop(true);

        axios.delete(`${urlProducts}/${id}`)
            .then(() => {
                setOpenBackdrop(false);
                setReload(!reload);
                setOpenPopup(false);
            })
            .catch((error) => {
                setOpenBackdrop(false);
                setOpenPopup(false);
                alert(error.message);
                console.log(error, "Error");
            });
    }

    return (
        <>
            <PageHeader title='Cargar productos' subTitle='Lista de productos cargados' />
            <Button variant="contained" style={{ marginTop: '10px', marginBottom: '10px' }} onClick={openInPopup}>Agregar producto</Button>
            <div style={{ display: 'flex', }}>
                <Grid container style={{ justifyContent: 'center' }}>
                    {items.map((item) => {
                        return <div key={item.id}>
                            <ProductCard item={item}
                                setRecordForEdit={setRecordForEdit}
                                setReload={setReload}
                                reload={reload}
                                setOpenBackdrop={setOpenBackdrop}
                                openPopup={openPopup}
                                setOpenPopup={setOpenPopup}
                                deleteRecord={deleteRecord} />
                        </div>
                    })}
                </Grid>
            </div>
            <Popup
                title={(recordForEdit.id !== '' ? "Editar" : "Agregar") + " producto"}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ProductCardForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
            <SimpleBackdrop open={open} setOpenBackdrop={setOpenBackdrop} />
        </>
    )
}

export default UpdateProducts
