"use client";


import Api from "./components/Api";
import React, { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState([]);


  useEffect(()=>{
 const fetchData=async()=>{
  try {
    const response = await fetch('https://6785ef34f80b78923aa4cd40.mockapi.io/data');
    const result = await response.json();
    setData(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
 }
fetchData()

  },[])

  return (
   <>
 
 <div className="flex flex-row flex-wrap justify-center gap-6"> {
    data.map((info)=>(
<Api key={info.id}
images={info.images}
price={info.price}
name={info.name}
desc={info.desc}
/>
    ))
  }
  </div>
   
 
   </>
  );
}
