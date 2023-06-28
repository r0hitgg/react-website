import { Search } from "react-bootstrap-icons";
import { useState, useContext } from 'react';
import {themeContext} from "./context";

export default function Searchbar(){
    const [showSearch, setShowSearch] = useState(false);
    const theme = useContext(themeContext);
    
    function HandleShowSearch(){
        setShowSearch(!showSearch);
    }
    
    return (
        <a >
            <input name="search" className={"form-control " + (showSearch ? "" : "d-none") } type="text"/>
            <button className={"btn btn-default btn-" + theme}>
                <Search onClick={HandleShowSearch}/>
            </button>
        </a>
    )
}