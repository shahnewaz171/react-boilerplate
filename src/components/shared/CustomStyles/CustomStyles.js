import React from "react";
import { Box, Container } from "@mui/system";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export const Main = ({ children, sx }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                ...sx
            }}
        >
            <Navbar />
            <Container
                component="main"
                fixed
                sx={{
                    flexGrow: 1,
                }}
            >
                {children}
            </Container>
            <Footer />
        </Box>
    )
}