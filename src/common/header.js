import {Link, NavLink} from "react-router-dom";
import { Bag, Heart, PersonCircle } from "react-bootstrap-icons";
import { useSelector } from 'react-redux';
import Searchbar from './searchbar';
import DarkMode from './dark_mode';
import {useContext} from "react";
import {themeContext} from "./context";

export default function Header(){
    const cartCount = useSelector((state) => state.cart)
    const wishListCount = useSelector((state) => state.wishlist.length)
    const theme = useContext(themeContext);

    return(
        <header className={"fixed-top"}>
            <nav className={"navbar navbar-expand-lg navbar-" + theme + " bg-" + theme}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink activeclassname="active" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Searchbar/>
                            <DarkMode/>
                            <Link to={'/cart'}>
                                <button className={"btn btn-default badge_button btn-" + theme}>
                                    <Bag/>
                                    <span className="badge_button_span">{cartCount.length}</span>
                                </button>
                            </Link>
                            <Link to={'/wishlist'}>
                                <button className={"btn btn-default badge_button btn-" + theme}>
                                    <Heart/>
                                    <span className="badge_button_span">{wishListCount}</span>
                                </button>
                            </Link>
                            <Link to={'/login'}>
                                <button className={"btn btn-default btn-" + theme}>
                                    <PersonCircle/>
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}