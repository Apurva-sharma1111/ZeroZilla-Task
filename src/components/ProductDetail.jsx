import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const getProductDetail = async () => {
      try {
        const result = await axios.get(url);
        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetail();
    //console.log(`https://fakestoreapi.com/products/${id}`);
  }, []);

  const { title, image, price, description, category } = product;

  function handleCart(){
    setCart((preValue) => [ ...preValue, product ]);
  }

  return (
    
    <div className="singleProductWrapper">
     
      <div className="productWrapper">
        <div className="productImage">
          <img src={image} className="productImg" alt={title} />
        </div>
        <div className="productDes">
          <ul>
            <li><strong>Product:</strong> {title}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Price:</strong> &#8377;{price}/-</li>
            <li><strong>Description:</strong> {description}</li>
          </ul>
          <button className="cartButton" onClick={handleCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
