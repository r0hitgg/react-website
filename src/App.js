import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux'
import Product from "./component/product";

function App() {
  const products = useSelector((state) => state.products.data)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="container-fluid pt-3">
      <div>
        <div className={"py-5 text-center"}>
          <h2>
            Welcome To My Shop!
          </h2>
        </div>
        <h3>
          Products
        </h3>
        <Carousel responsive={responsive}>
          {products.map((product, key) => {
            return <Product product={product} isCarousel={true} key={key}/>
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
