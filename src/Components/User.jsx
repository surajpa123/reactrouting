import { useParams } from "react-router-dom"
import axios from "axios";
import React from "react";
import { useState } from "react";
export const User = ()=>{
    const {name} = useParams()
    const [data,setData] = useState([]);
  React.useEffect(()=>{
    getdata()
  },[])
  const getdata = ()=>{
    axios.get(`https://fakestoreapi.com/products/${name}`).then(function(res){
        setData(res.data)
        console.log(data)
    })
  }
    return(
    <>
    <h1>Hello</h1>
    </>
    )  
    
}