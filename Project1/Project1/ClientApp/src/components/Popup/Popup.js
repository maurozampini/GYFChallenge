import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} disableEscapeKeyDown={false}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button
                        name={'exitPopUpButton'}
                        color="secondary"
                        onClick={() => { setOpenPopup(false) }}>
                        <CloseIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup;
