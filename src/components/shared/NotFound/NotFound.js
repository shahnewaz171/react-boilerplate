import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../../images/404.png';
import { Main } from '../CustomStyles/CustomStyles';

const NotFound = () => {

    return (
        <Main>
            <Box sx={{ height: "60vh", display: "flex",  justifyContent: "center"  }}>
                <Typography component='img' src={Logo} sx={{ height: 1 }} />
            </Box>
            <Typography component='h5' sx={{ fontWeight: "bold", textAlign: "center", my: 2 }}>
                Page not found!
            </Typography>
        </Main>
    );
};

export default NotFound;