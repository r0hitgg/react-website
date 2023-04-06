import {Link, NavLink} from "react-router-dom";
import { Bag, Heart, PersonCircle } from "react-bootstrap-icons";
import { useSelector } from 'react-redux';

export default function Header(){
    const cartCount = useSelector((state) => state.cart)
    const wishListCount = useSelector((state) => state.wishlist.length)

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                            <Link to={'/cart'}>
                                <button className="btn btn-default badge_button">
                                    <Bag/>
                                    <span className="badge_button_span">{cartCount.length}</span>
                                </button>
                            </Link>
                            <Link to={'/wishlist'}>
                                <button className="btn btn-default badge_button">
                                    <Heart/>
                                    <span className="badge_button_span">{wishListCount}</span>
                                </button>
                            </Link>
                            <Link to={'/login'}>
                                <button className="btn btn-default">
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