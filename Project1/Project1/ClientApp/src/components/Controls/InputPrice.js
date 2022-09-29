import React from 'react'
import { TextField, InputAdornment, FormHelperText } from '@mui/material';

const InputPrice = (props) => {
    const { name, label, value, error = null, onChange, type, maxLength, rows, inputComponent, ...other } = props;

    return (
        <>
            <TextField
                id="search-bar"
                name={name}
                onInput={(e) => {
                    const re = /^[0-9]{0,6}$|^1[0]{0,6}$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                        onChange(e)
                    }
                }}
                {...other}
                fullWidth
                label="Precio"
                style={{ marginTop: '5px', marginBottom: '5px' }}
                value={value}
                error={error === null || error === "" ? false : true}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            <FormHelperText id="code_error" error={error !== ""}>
                {error}
            </FormHelperText>
        </>
    )
}

export default InputPrice;
