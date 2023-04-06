import { Link } from "react-router-dom";
import { Cart, Heart } from 'react-bootstrap-icons';
import { productStore as store } from "../store/store";
import { cartReducer, whishListReducer } from "../store/reducer";


export default function Product({ product, isCarousel }){

    function onAddToCart(e, product){
        store.dispatch(cartReducer.actions.add(product))
    }

    function onAddToWishList(e, product){
        store.dispatch(whishListReducer.actions.add(product))
    }

    return (
            <div className={"p-3 text-center product_card_body " + (isCarousel ? '': 'col-md-3')}>
            <div className="pb-3">
                <Link to={`/shop/product/${product.id}`}>
                    <img alt={product.name} src={product.image_128 ? `data:image/jpeg;base64,${product.image_128}` : undefined}/>
                </Link>
                <div className="product_card_buttons">
                    <button className="btn btn-light border rounded-circle" onClick={e => onAddToCart(e, product)}>
                        <Cart/>
                    </button>
                    <button className="btn btn-light border rounded-circle" onClick={e => onAddToWishList(e, product)}>
                        <Heart/>
                    </button>
                </div>
            </div>
            <div>
                <Link to={`/shop/product/${product.id}`} className="product_card_name">
                    {product.name}
                </Link>
            </div>
        </div>
    );
}