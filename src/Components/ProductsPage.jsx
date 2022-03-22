import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
export const ProductsPage = () => {

  const [data,setData] = useState([]);
  React.useEffect(()=>{
    getdata()
  },[])
  const getdata = ()=>{
    axios.get("https://fakestoreapi.com/products").then(function(res){
        setData(res.data)
        console.log(data)
    })
  }
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          justifyContent: "space-evenly",
          width: "500px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {data.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 35%)",
              justifyContent: "space-evenly",
              width: "500px",
              margin: "auto",
              paddingTop: "10px",
            }}
          >
            <div className="name">{el.title}</div>
            <div className="price">{el.price}</div>
            <Link to = {`/products/${el.id}`}>more details</Link>
            
          </div>
        );
      })}
    </>
  );
};



