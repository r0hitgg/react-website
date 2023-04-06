import {useParams} from "react-router-dom";
import { ReactReduxContext } from 'react-redux';
import {useContext} from "react";
import BreadCrumbs from "../common/breadcrumbs"

export default function ProductDetail(props){
    const { id } = useParams();
    const { store } = useContext(ReactReduxContext);
    const state = store.getState()
    const currentProduct = state.products.data.find(product => product.id === parseInt(id))

    return (
            <div>
                <BreadCrumbs currentName={currentProduct.name}/>
                <div className="container">
                    <img alt={currentProduct.name} src={`data:image/jpeg;base64,${currentProduct.image_128}`}/>
                    {currentProduct.name}
                </div>
            </div>
    );
}