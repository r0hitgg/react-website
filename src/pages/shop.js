import Product from "../component/product";
import Sidebar from "../component/sidebar";
import { useSelector } from 'react-redux';
import { Bag } from "react-bootstrap-icons";
import {useSearchParams} from "react-router-dom";

export default function Shop(){
    let products = useSelector((state) => state.products.data);
    const categories = useSelector((state) => state.products.categories);
    const params = useSearchParams();
    const currentCategory = params[0].get('category');
    if(currentCategory){
        products = products.filter(rec => rec.public_categ_ids && rec.public_categ_ids.includes(parseInt(currentCategory)))
    }

    return (
        <div className="container py-4">
            <div className={"row"}>
                <aside className={"col-md-3 position-sticky shop_sidebar"}>
                    <section className={"pb-3"}>
                        <h4>
                            <Bag/> Shop
                        </h4>
                    </section>
                    <Sidebar categories={categories} currentCategory={currentCategory}/>
                </aside>
                <div className={"col-md-9"}>
                    <div className="row justify-content-between">
                        {products.map((product, key) => {
                            return <Product product={product} currentCategory={currentCategory} key={key}/>
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}