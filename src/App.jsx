import React from "react";
import useFetch from "./hooks/useFetch"; 
import "./App.css";

function App() {
// using custom hook
const { data, loading, error } = useFetch(
"https://api.escuelajs.co/api/v1/products"
);


if (loading) return <h2>Loading...</h2>; 
if (error) return <h2>Error: {error}</h2>; 


return (
<div className="app-container">

<h1>Product List</h1>

<div className="product-list">

{data &&
data.map((product) => (

<div key={product.id} className="product-card">

<img src={product.images[0]} alt={product.title} />

<h3>{product.title}</h3>
<p>${product.price}</p>
</div>
))}
</div>
</div>
);
}


export default App;