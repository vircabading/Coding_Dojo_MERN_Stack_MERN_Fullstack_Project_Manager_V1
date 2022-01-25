import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

////////////////////////////////////////////////////
//  ALL PRODUCTS COMPONENT
////////////////////////////////////////////////////

const AllProducts = () => {
    // //// FIELDS /////////////////////////////////
    const [products, setProducts] = useState([]);

    // //// GET ALL PRODUCTS FROM API //////////////
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log("Products:", JSON.stringify(response.data.products));
                setProducts(response.data.products);
            })
            .catch(error => {
                console.log("⚠⚠⚠ ERROR FOUND when looking for products ⚠⚠⚠")
            });
    }, []);

    // //// OUTPUT /////////////////////////////////
    return (<div>
        {products
            ? <div>
                <table className='table'>
                    <thead className="thead-dark bg-warning">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col-2">Product</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {
                            products.map((product, idx) => {
                                const destination = "/" + product._id
                                return (<tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>
                                        <Link to={ destination } className='text-info'>
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td>${parseFloat(product.price).toFixed(2)}</td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
            : <div>Loading Products ⌛ ⏳ ⏳</div>
        }
    </div>);
};

export default AllProducts;
