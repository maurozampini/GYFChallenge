import React, { useState } from 'react'
import { Grid, } from '@mui/material';
import Controls from "../Controls/Controls";

const ProductCardForm = (props) => {
    const { recordForEdit, addOrEdit } = props;
    const [values, setValues] = useState(recordForEdit);
    const [errors, setErrors] = useState({ name: "", price: "", date: "" });

    const handleInputChange = ({ target }) => {
        setErrors({ ...errors, [target.name]: '' });
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handleAddOrEdit = () => {
        validate(values);

        if (formIsValid()) {
            addOrEdit(values);
        }
    }

    const validate = (fieldValues = values) => {
        let temp = {};

        if ("name" in fieldValues)
            temp.name = fieldValues.name ? "" : "El campo es requerido."

        if ("price" in fieldValues)
            temp.price = fieldValues.price ? "" : "El campo es requerido."

        if ("date" in fieldValues)
            temp.date = fieldValues.date ? "" : "El campo es requerido."

        setErrors({
            ...temp
        });
    }

    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.name &&
            fieldValues.price &&
            fieldValues.date &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    };

    return (
        <form>
            <Grid container>
                <Grid item xs={12} md={12} style={{ textAlign: 'center', width: '100%', }}>
                    <Controls.Input
                        name="name"
                        label="Nombre"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.InputPrice
                        name="price"
                        label="Precio"
                        value={values.price}
                        onChange={handleInputChange}
                        error={errors.price}
                    />
                    <Controls.DatePicker
                        name="date"
                        label="Fecha inicio"
                        value={values.date?.toLocaleString()}
                        onChange={handleInputChange}
                        error={errors.date}
                    />
                    <Controls.ComboBox
                        name="category"
                        label="Categoría"
                        value={values.category}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="description"
                        label="Descripción"
                        value={values.description}
                        onChange={handleInputChange}
                    />
                    <Controls.CustomizedButton
                        name="acept"
                        label={recordForEdit.id !== '' ? "Modificar" : "Agregar"}
                        onClick={handleAddOrEdit}
                    />
                </Grid>
            </Grid>
        </form>
    )
}

export default ProductCardForm;
