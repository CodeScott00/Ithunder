import { Container } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from "@mui/material";
import logoThunder from "../img/thunderlabs-logo.png";
import linkedinLogo from "../img/linkedin-50.png";
import itunesLogo from "../img/itunes-50.png";

const Header = () => {

    return (
        // <Container className="Header">
            <AppBar position="sticky" style={{backgroundColor: "#000"}}>
                <Toolbar>
                    <Typography>
                        <h1>ITHUNDER</h1>
                    </Typography>
                    
                        <img src={itunesLogo}/>
                        <a href="https://thunderlabs.com.au/" target="blank">
                            <img className="img" src={logoThunder} height="50px" width="75px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/scott-dougal-software-developer/" target="blank">
                            <img className="img" src={linkedinLogo} />
                        </a>
                   
                   
                   
                    
                </Toolbar>
            </AppBar>
        // </Container>
    )
}

export default Header;