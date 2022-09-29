import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment'

const DatePicker = (props) => {
    const { name, label, value, error = null, onChange, type, maxLength, rows, inputComponent, ...other } = props;
    const date = Date.now()

    const onKeyDown = (e) => {
        e.preventDefault();
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                {...other}
                label={label}
                inputFormat="DD/MM/YYYY"
                name={name}
                value={value}
                onChange={(e) => { onChange({ target: { name: name, value: e } }) }}
                renderInput={(params) =>
                    <TextField
                        error={error === null || error === "" ? false : true}
                        autoComplete='off'
                        value={moment(date).format('DD/MM/YYYY')}
                        onKeyDown={onKeyDown}
                        {...params}
                    />}
            />
        </LocalizationProvider>
    );
}

export default DatePicker;
