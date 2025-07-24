// Products.jsx
import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const fetchProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
};

export const Products = () => {
  const navigate=useNavigate();
  const {
    data: products,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="p-4">Loading products...</p>;
  if (isError) return <p className="text-red-500 p-4">{error.message}</p>;


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
     
      {products.map(product => (
        <div key={product.id} className="border p-3 rounded shadow text-sm">
          <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
          <h3 className="mt-2 font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
           <button type="button" onClick={()=>navigate('/home')} className='cursor-pointer bg-blue-500 hover:bg-blue-400 rounded-2xl p-3' title='Go Home'>Home</button>
        </div>
      ))}
    </div>
  );
};
