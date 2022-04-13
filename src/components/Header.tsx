import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Logo} from "./Logo";

const Header = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Logo/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        align="center"
                        sx={{flexGrow: 1}}
                    >
                        Vos solutions digitales
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header;