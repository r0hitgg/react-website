import BreadCrumbs from "../common/breadcrumbs";
import { useSelector } from 'react-redux'
import { Trash, Cart as CartIcon} from "react-bootstrap-icons";
import { productStore as store } from "../store/store";
import { cartReducer } from "../store/reducer";

export default function Cart(){
    const products = useSelector((state) => state.cart);

    function removeCart(id){
        store.dispatch(cartReducer.actions.remove(id))
    }

    return (
        <div className="container">
            <BreadCrumbs currentName={'Cart'}/>
            <h4>
                <CartIcon/> My Cart
            </h4>
            <div className="pt-4">
                {products.length ?
                    <table className="table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, key) => {
                                return <tr key={key}>
                                    <th scope="row">
                                        {key + 1}
                                    </th>
                                    <td>
                                        {product.product.name}
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-danger" onClick={e => removeCart(product.product.id)}>
                                            <Trash/>
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table> :
                    <div className={"text-center"}>
                        <h3>
                            Your Cart Is Empty!
                        </h3>
                    </div>
                }

            </div>
        </div>
    );
}