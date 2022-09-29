import React from 'react'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery';

function PageHeader(props) {
    const matches = useMediaQuery("(min-width:600px)");
    const { title, subTitle } = props;

    return (
        <div>
            <Typography
                variant={matches ? "h5" : "h6"}
                component="div">
                {title?.toUpperCase()}
            </Typography>
            <Typography
                variant="subtitle2"
                component="div">
                {subTitle}
            </Typography>
        </div>
    )
}

export default PageHeader
