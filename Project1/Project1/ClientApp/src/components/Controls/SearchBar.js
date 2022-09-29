import { TextField, InputAdornment } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
            const re = /^[0-9]{0,6}$|^1[0]{0,6}$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                setSearchQuery(e.target.value)
            }
        }}
        label="Presupuesto"
        variant="outlined"
        placeholder="Ingrese presupuesto..."
        size="small"
        style={{ marginTop: '15px', marginBottom: '15px' }}
        value={searchQuery}
        InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
    />
);

export default SearchBar;
