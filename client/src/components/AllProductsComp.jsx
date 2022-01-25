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
            .then(response => setProducts(response.data.products))
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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {
                            products.map((product, idx) => {
                                const destination = "/" + product._id
                                return (<tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>
                                        <Link   className='text-info'
                                                to={ "/products/" + product._id + "/retrieve" } >
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td className='row'>
                                        <Link   className='col'
                                                to={ "/products/" + product._id + "/retrieve" }>
                                            <button className='btn btn-sm btn-success round' >
                                                <strong>🔎 View</strong>
                                            </button>
                                        </Link>
                                        <Link   className='col'
                                                to={ "/products/" + product._id + "/update" }>
                                            <button className='btn btn-sm btn-warning round' >
                                                <strong>✍🏼 Edit</strong>
                                            </button>
                                        </Link>
                                        <Link   className='col'
                                                to={ "/products/" + product._id + "/delete" } >
                                            <button className='btn btn-sm btn-danger round'>
                                                <strong>⛔ Delete</strong>
                                            </button>
                                        </Link>
                                    </td>
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
