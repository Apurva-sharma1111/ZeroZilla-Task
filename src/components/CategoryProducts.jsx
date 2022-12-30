import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CategoryProducts() {
  let { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProdctsByCat = async () => {
      const url = `https://fakestoreapi.com/products/category/${category}`;
      try {
        const result = await axios.get(url);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProdctsByCat();
    //console.log(`https://fakestoreapi.com/products/category/${category}`) ;
  }, []);

  return (
    <>
      <div className="categoryContainer">
        {products.map((product) => {
          return (
            <div className="categoryCard" key={product.id}>
                <Link to={`/products/` + product.id}>
                    <img src={product.image} alt="" className="catgoryImg" />
                    <span className="categoryName">{product.title}</span>
                </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
