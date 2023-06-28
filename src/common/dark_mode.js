import { BrightnessHighFill, MoonStarsFill } from "react-bootstrap-icons";
import {themeContext} from "./context";
import { useContext } from 'react';

export default function DarkMode() {
    const theme = useContext(themeContext);
    
    function onClickDarkMode(){
        const currentMode = localStorage.getItem('themeMode') || 'light';
        localStorage.setItem('themeMode', currentMode === 'light' ? 'dark': 'light');
    }
    
    return (
        <button className={"btn btn-default btn-" + theme} onClick={onClickDarkMode}>
            {theme === 'light' ? 
            <BrightnessHighFill/> :
            <MoonStarsFill/>}
        </button>
    )
}