import BreadCrumbs from "../common/breadcrumbs";
import { useSelector } from 'react-redux'
import { Trash,  Heart} from "react-bootstrap-icons";
import { productStore as store } from "../store/store";
import { whishListReducer } from "../store/reducer";

export default function Wishlist(){
    const products = useSelector((state) => state.wishlist);

    function removeWishlist(id){
        store.dispatch(whishListReducer.actions.remove(id))
    }

    return (
        <div className="container">
            <BreadCrumbs currentName={'Cart'}/>
            <h4>
                <Heart/> My Wishlist
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
                                        {product.name}
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-danger" onClick={e => removeWishlist(product.id)}>
                                            <Trash/>
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table> :
                    <div className={"text-center"}>
                        <h3>
                            Your Wishlist Is Empty!
                        </h3>
                    </div>
                }

            </div>
        </div>
    );
}