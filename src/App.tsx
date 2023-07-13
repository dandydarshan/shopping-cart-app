import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import axios from 'axios';

function App() {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then(response=>{
      setProducts(response.data.products)
    })
  },[])

  return <>{products.map((product:any)=>{
   return (<Card product={product}/>)
  })}</> 
}

export default App;
