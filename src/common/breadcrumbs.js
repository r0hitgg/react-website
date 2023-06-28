import { Link } from "react-router-dom";

export default function BreadCrumbs({ backTo={} , currentName }){

    return (
        <nav aria-label="breadcrumb" className="breadcrumb container pt-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="text-decoration-none" to={ Object.keys(backTo).length ? backTo.route : "/"}>{ Object.keys(backTo).length ? backTo.label : 'Home'}</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><span className="text-decoration-none text-muted">{currentName}</span></li>
            </ol>
        </nav>
    );
}