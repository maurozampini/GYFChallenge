import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ComboBox = (props) => {
    const { name, label, value, onChange, type, maxLength, rows, inputComponent, ...other } = props;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth style={{ marginTop: '10px', textAlign: 'left' }}>
                <InputLabel id="simple-select-label" >Categoría</InputLabel>
                <Select
                    {...other}
                    labelId="simple-select-label"
                    id="simple-select"
                    name={name}
                    value={value}
                    label={label}
                    onChange={onChange}
                >
                    <MenuItem value={"PRODUNO"}>PRODUNO</MenuItem>
                    <MenuItem value={"PRODDOS"}>PRODDOS</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default ComboBox;
