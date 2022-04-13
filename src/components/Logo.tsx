import {Box} from "@mui/material";
import logoImg from "../assets/logo_marque.png"

export const Logo = () => (
    <Box
        component="img"
        sx={{
            p: {xs: 0, md: 1},
            maxWidth: { xs: 100, md: 300 },
        }}
        alt="Logo"
        src={logoImg}
    />
)

