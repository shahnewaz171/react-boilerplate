import React from 'react';
import { Typography } from '@mui/material';
import { Main } from '../shared/CustomStyles/CustomStyles';

const Home = () => {

    return (
        <Main>
            <Typography component="h1" sx={{ textAlign: 'Center' }}>This is home page</Typography>
        </Main>
    );
};

export default Home;