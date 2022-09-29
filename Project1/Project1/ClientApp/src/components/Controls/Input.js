import React from 'react'
import { TextField, FormHelperText } from '@mui/material';

const Input = (props) => {
    const { name, label, value, error = null, onChange, type, maxLength, rows, inputComponent, ...other } = props;

    return (
        <div>
            <TextField
                style={{ marginTop: '10px' }}
                id={`${name}`}
                variant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                fullWidth={true}
                type={type}
                {...other}
                inputProps={{ maxLength: maxLength }}
                error={error === null || error === "" ? false : true}
                rows={rows}
                InputProps={{
                    inputComponent: inputComponent
                }}
            />
            <FormHelperText id="code_error" error={error !== ""}>
                {error}
            </FormHelperText>
        </div>
    )
}

export default Input;
