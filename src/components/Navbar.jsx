import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (

        <AppBar position="static" sx={{
            backgroundColor: "#BE3D3E",
            alignItems: "left",
            boxShadow: "none",
            marginTop: "30px",
            marginBottom: "20px",
            marginLeft: "0",
            width: "80%"
            
        }}>
            <Toolbar>
                <Typography variant="h1" component="div" sx={{
                    flexGrow: 1,
                    margin: "20px",
                    fontWeight: "800"
                }}>
                    BOREDOM CUREDOM
                </Typography>
            </Toolbar>
        </AppBar>

    );
}