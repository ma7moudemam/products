import axios from "axios";
import React, { useEffect } from "react";
import ProductsCard from "../../Components/Products/ProductsCard";
import { axiosInstance } from "../../Network/axiosConfig";

function Products() {
  
  const[products, setProducts] = React.useState([

  ]);

  useEffect(() => {
    axiosInstance
      .get('/products' , {
        params:{
          limit:15,
        },
        // headers:{
        //   'Authorization': 'Bearer nklmdsf544354dsfdsf5434f',
        // }
      }).then((res) => {
      setProducts(res.data)
    }).catch((err) => {
      console.log(err)
    })


    // Post Data

    // .axiosInstance.post('url',{
    //   name:"test",
    // },{
    //   params:{
    //     limit:6,
    //   },
    //   headers:{
    //     'Authorization': 'Bearer nklmdsf544354dsfdsf5434f',
    //   }
    // }
    // )
  } , []);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => {
          return (
            <div className="col-3 mb-5" key={product.id}>
              <ProductsCard product={product}/>
            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default Products;
