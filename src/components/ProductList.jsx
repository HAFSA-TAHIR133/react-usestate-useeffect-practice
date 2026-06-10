// API:
// https://fakestoreapi.com/products
// Display:
// Image
// Title
// Price
// Learn:
//  API Calls
//  useEffect
//  Mapping data
import '../App.css'
import { useEffect,useState } from "react";
function ProductList(){
    const [product,setProduct] =useState([]);
    useEffect(()=>{
        const fetchProductData= async ()=>{
            try{
                const fetchData = await fetch('https://fakestoreapi.com/products');
                const fetchedData = await fetchData.json();
                setProduct(fetchedData);
            }
            catch(error){
                console.log("Error in fetching the product. ",{error});
            }
            
        }
        fetchProductData();
    },[]);

    return(<>
    <h2 style={{textAlign:'center', fontSize:'45px'}}>Product Items</h2>
        {product && (
            <div className='product-items-list'>
                {
                    product.map(item=>{
                        return (
                            <div key={item.id} className="product-items">
                                <img src={item.image} alt="product" style={{borderRadius:"20px",width:'200px',height:'200px'}}/> 
                                <h3>{item.title}</h3>
                                <p>Price: {item.price}</p>
                            </div>
                        );
                    })
                }
            </div>
        )}
    </>);
}
export default ProductList;