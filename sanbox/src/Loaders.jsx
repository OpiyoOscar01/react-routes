import axios from 'axios'
export const productLoader = async ()=>{
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}