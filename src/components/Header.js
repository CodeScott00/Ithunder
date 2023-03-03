import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography} from "@mui/material";
import logoThunder from "../img/thunderlabs-logo.png";
import linkedinLogo from "../img/linkedin-50.png";
import itunesLogo from "../img/itunes-50.png";

const Header = () => {

    return (
            <AppBar position="sticky" style={{backgroundColor: "#000"}}>
                <Toolbar >
                    <Typography>
                        <h1>ITHUNDER</h1>
                    </Typography> 
                    <img src={itunesLogo}/> 
                    <div className="logo">
                        <a href="https://thunderlabs.com.au/" target="blank">
                            <img src={logoThunder} height="50px" width="130px"/>
                        </a>     
                        <a href="https://www.linkedin.com/in/scott-dougal-software-developer/" target="blank">
                            <img src={linkedinLogo} />
                        </a>  
                    </div>
                </Toolbar>
            </AppBar>
    )
}

export default Header;
