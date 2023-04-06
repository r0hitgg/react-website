import Product from "../component/product";
import { useSelector } from 'react-redux'

export default function Shop(){
    const products = useSelector((state) => state.products.data)

    return (
        <div className="container py-4">
            <div className="row justify-content-around">
                {products.map((product, key) => {
                    return <Product product={product} key={key}/>
                })}
            </div>
        </div>
    );
}