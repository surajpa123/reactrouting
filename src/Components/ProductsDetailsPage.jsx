import { useParams } from "react-router-dom"
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
export const ProductsDetailsPage = () => {
  const {name} = useParams()
    const [data,setData] = useState([]);
  React.useEffect(()=>{
    updateNews()
  },[])
  // const getdata = ()=>{
  //   axios.get(`https://fakestoreapi.com/products/${name}`).then(function(res){
  //       setData(...render,res.data)
     
  //   })
  // }
  const updateNews =  async()=>{
    const res= await  fetch(`https://fakestoreapi.com/products/${name}`)
    const data = await res.json();
    setData(data)
    
}
console.log(data)
  // console.log(render)
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
            <div className="name">{data.title}</div>
            <div className="price">{data.price}</div>
            <div className="price">{data.description}</div>
          <div className="name"> <img src={data.image}  alt="" height="200px" /></div>
            
          </div>
    </>
  );










  
};
