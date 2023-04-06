import { Link } from "react-router-dom";

export default function BreadCrumbs({ currentName }){

    return (
        <nav aria-label="breadcrumb" className="breadcrumb container pt-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="text-decoration-none" to={"/"}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><span className="text-decoration-none text-muted">{currentName}</span></li>
            </ol>
        </nav>
    );
}