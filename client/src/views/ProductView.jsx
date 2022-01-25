import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

////////////////////////////////////////////////////
//  PRODUCT VIEW
////////////////////////////////////////////////////

/**
 * PRODUCT VIEW
 * @returns HTML with information about one product
 */
const ProductView = () => {
    // //// FIELDS ////////////////////////////////
    const { id } = useParams();
    const [product, setProduct] = useState({});

    // //// GET PRODUCT FROM API //////////////////
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(response => {
                console.log("Product:", JSON.stringify(response.data.product));
                setProduct(response.data.product);
            })
            .catch(error => {
                console.log("⚠⚠⚠ ERROR FOUND when looking for product ⚠⚠⚠")
            });
    }, []);

    // //// OUTPUT ////////////////////////////////
    return (
        product
        ? <div>
            <h2>Product 📦:</h2>
            <hr />
            <table className='table'>
                    <thead className="thead-dark bg-warning">
                        <tr>
                            <th scope="col">{ product.title }</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr>
                            <th scope="row">Price: ${ parseFloat( product.price ).toFixed(2)  }</th>
                        </tr>
                        <tr>
                            <th scope="row">Description: { product.description }</th>
                        </tr>
                    </tbody>
                </table>
        </div>
        : <div>Loading ⌛ ⏳ ⏳</div>
    )
}

export default ProductView