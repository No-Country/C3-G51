import React, { useState, useEffect } from "react";
import "./Destacados.css";
import Card from "../Card/Card";

const Destacados = () => {
  const [productData, setProductData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3003/api/product");
        const data = await result.json();
        setProductData(data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setTimeout(() => {
      console.log(productData);
    }, 4000);
  }, []);
  return (
    <>
      <div className="destacados">
        <h1>PRODUCTOS DESTACADOS</h1>
        <div className="destacados__cards">
          {isLoaded ? (
            productData.map((producto) => {
              return (
                <div>
                  <Card
                    producto={producto}
                  />
                </div>
              ); 
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </> 
  );
};

export default Destacados;
