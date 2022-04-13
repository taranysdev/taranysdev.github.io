import {styled} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const Content = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1rem',
    maxWidth: '1170px',
    margin: '0 auto',
}))
export const Layout = () => (
    <div>
        <Header />
        <Content>
            <Home />
        </Content>
        <Footer />
    </div>
)