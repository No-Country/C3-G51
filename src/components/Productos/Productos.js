import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Productos.css";

const Productos = () => {
  const [productData, setProductData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3003/api/product");
      const data = await result.json();
      setProductData(data);
      setIsLoaded(true);
      console.log(data);
    };
    fetchData();
    setTimeout(() => {
      console.log(productData);
    }, 4000);
  }, []);

  return (
    <>
      <div className="productos">
        {isLoaded ? (
          productData.map((producto) => {
            return (
              <div>
                <Card producto={producto} />
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Productos;

// productData.map((producto) => {
//   return (
//     <div>
//       <Card
//         id={producto.id}
//         name={producto.name}
//         price={producto.price}
//         description={producto.description}
//         picture={producto.picture}
//         brand={producto.brand}
//       />
//     </div>
//   )
// })
