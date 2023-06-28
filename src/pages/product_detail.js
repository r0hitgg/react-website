import {useParams} from "react-router-dom";
import { ReactReduxContext } from 'react-redux';
import {useContext} from "react";
import BreadCrumbs from "../common/breadcrumbs"

export default function ProductDetail(){
    const { id } = useParams();
    const { store } = useContext(ReactReduxContext);
    const state = store.getState()
    const currentProduct = state.products.data.find(product => product.id === parseInt(id))
    const backTo = {
        'label': 'Shop',
        'route': '/shop'
    }

    return (
            <div>
                <BreadCrumbs backTo={backTo} currentName={currentProduct.name}/>
                <div className="container d-flex">
                    <div className={"col-md-3"}>
                        <img alt={currentProduct.name} src={`data:image/jpeg;base64,${currentProduct.image_128}`}/>
                    </div>
                    <div className={"col-md-9"}>
                        {currentProduct.name}
                    </div>
                </div>
            </div>
    );
}