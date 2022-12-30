import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products/");
        setAllProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#ededed" }}>
      <input
        type="text"
        className="searchBar"
        placeholder="Search Item.."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="categoryContainer">
        {
            allProducts.filter((product) => {
                if(query === ""){
                    return product;
                }
                if(product.title.toLowerCase().includes(query.toLowerCase())){
                    return product
                }
            }).map((product) => {
                return (
                  <div className="categoryCard" key={product.id}>
                    <Link to={`/products/` + product.id}>
                      <img src={product.image} alt="" className="catgoryImg" />
                      <span className="categoryName">{product.title}</span>
                    </Link>
                  </div>
                );
              })
        }
        
      </div>
    </div>
  );
}
