import React from 'react'
import { FormHelperText, Button } from '@mui/material';

const CustomizedButton = (props) => {
    const { name, label, value, error = null, onChange, type, onClick, rows, inputComponent, ...other } = props;

    return (
        <>
            <Button
                {...other}
                variant="contained"
                style={{ marginTop: '10px', marginBottom: '10px' }}
                onClick={onClick}
            >
                {label}
            </Button>
            <FormHelperText id="code_error" error={error !== ""}>
                {error}
            </FormHelperText>
        </>
    )
}

export default CustomizedButton;
