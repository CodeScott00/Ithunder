import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

const Search = ({ search, setSearch }) => {

    return (
       
        <Container className="Search container" >
            <form>
                <TextField id="search-bar" className="text" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    label="Search IThunder..." 
                    variant="outlined"
                    placeholder="Search.." 
                    size="small"
                />
                <IconButton disabled="true" type="submit" aria-label="search"> 
                    <SearchIcon style={{ fill: "#ef0d33" }} />
                </IconButton>  
            </form>
        </Container>
    )
}

export default Search;
