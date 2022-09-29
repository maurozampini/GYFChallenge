import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import moment from 'moment'

function ProductCard(props) {
    const { item, setOpenPopup, setRecordForEdit, deleteRecord } = props;

    const openInPopup = () => {
        setRecordForEdit(item);
        setOpenPopup(true);
    }

    return (
        <>
            <Grid item>
                <Card sx={{ maxWidth: 345, width: 345, margin: '10px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }}>
                                {item.name?.charAt(0)}
                            </Avatar>
                        }
                        title={item.name}
                        subheader={`${moment(item.date).format('DD/MM/YYYY')} - $${item.price} - ${item.category}`}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'space-around' }}>
                        <IconButton aria-label="add to favorites" onClick={() => { openInPopup(props.item) }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => { deleteRecord(item.id) }} aria-label="share">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}

export default ProductCard;
