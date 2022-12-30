import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = "https://fakestoreapi.com/products/";
      try {
        const result = await axios.get(url);
        setCategory(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCategories();
  }, []);

  const uniqueCategory = [];
  const unique = category.filter((element) => {
    const duplicate = uniqueCategory.includes(element.category);
    if (!duplicate) {
      uniqueCategory.push(element.category);
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="categoryContainer">
      {unique.map((cat) => {
        return (
          <div className="categoryCard" key={cat.category}>
            <Link to={`/category/` + cat.category}>
                <img src={cat.image} alt="" className="catgoryImg" />
                <span className="categoryName">{cat.category}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
  
}

