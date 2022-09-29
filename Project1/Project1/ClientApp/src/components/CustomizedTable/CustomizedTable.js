import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import SearchBar from '../Controls/SearchBar';
import axios from 'axios';
import { urlProducts } from '../../endpoints/endpoints';
import moment from 'moment'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        let obj = [];

        data.forEach((elementP1) => {
            if (elementP1.category === "PRODUNO") {
                data.forEach((elementP2) => {
                    if (elementP2.category === "PRODDOS") {
                        const diference = (query - (elementP1.price + elementP2.price));

                        if (diference >= 0) {
                            if (obj.length === 0 || diference <= obj[0].diference) {
                                obj.splice(0, 1, { ...elementP1, diference });
                                obj.splice(1, 1, { ...elementP2, diference });
                            }
                        }
                    }
                })
            }
        })

        return obj.filter(x => Math.max(query - x.diference) && (x.category === "PRODUNO" || x.category === "PRODDOS"));
    }
};

const CustomizedTable = () => {
    const [open, setOpen] = useState(true);
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, items);

    useEffect(() => {
        axios.get(urlProducts)
            .then((res) => {
                setOpen(false);
                setItems(res.data);
            })
            .catch((error) => {
                setOpen(false);
                alert(error.message);
                console.log(error);
            });
    }, []);

    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nombre</StyledTableCell>
                            <StyledTableCell>Precio</StyledTableCell>
                            <StyledTableCell>Fecha</StyledTableCell>
                            <StyledTableCell>Categoría</StyledTableCell>
                            <StyledTableCell>Descripción</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataFiltered.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell>{row.name}</StyledTableCell>
                                <StyledTableCell>${row.price}</StyledTableCell>
                                <StyledTableCell>{moment(row.date).format('DD/MM/YYYY')}</StyledTableCell>
                                <StyledTableCell>
                                    <Chip label={row.category} color={row.category === "PRODUNO" ? "success" : "warning"} />
                                </StyledTableCell>
                                <StyledTableCell>{row.description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <SimpleBackdrop open={open} setOpen={setOpen} />
        </>
    );
}

export default CustomizedTable;
