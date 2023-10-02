import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography} from "@mui/material";
import linkedinLogo from "../assets/linkedin-50.png";
import itunesLogo from "../assets/itunes-50.png";
import dovetailLogo from "../assets/dovetailLogo.png";

const Header = () => {

    return (
            <AppBar position="sticky" style={{backgroundColor: "#000"}}>
                <Toolbar >
                    <Typography>
                        <h1>IDOVE</h1>
                    </Typography> 
                    <img src={itunesLogo}/> 
                    <div className="logo">
                        <a href="https://www.dovetail.com/" target="blank">
                            <img src={dovetailLogo} height="50px" width="50px"/>
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
