// import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
    
      <div
        style={{
          // display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {[].map((el) => {
          return <li>{el.title}</li>
        })}
      </div>
    </>
  );
};
