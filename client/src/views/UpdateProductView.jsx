import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

////////////////////////////////////////////////////
//  UPDATE PRODUCT VIEW
////////////////////////////////////////////////////

const UpdateProductView = () => {
    // //// FIELDS /////////////////////////////////
    const [product, setProduct] = useState({});
    const { id } = useParams();

    // //// GET PRODUCT FROM API ///////////////////
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log("⚠⚠⚠ ERROR FOUND when retrieving product ⚠⚠⚠"))
    }, [])

    const handleSubmit = () => {
        
    }

    // //// OUTPUT /////////////////////////////////
    return (
        product
            ? <div >
                <h2>Update Product:</h2>
                <p>{JSON.stringify(product)}</p>
                <hr />
                <form onSubmit={e => handleSubmit(e)} >
                    <div className="form-group mb-2">
                        <label htmlFor="title">Product Name</label>
                        <input type="text" className="form-control"
                            id="title" 
                            value={ product.title }
                            />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="price">Product $ Price</label>
                        <input type="number" className="form-control"
                            id="price" min=".01" step="0.01"
                            value={ product.price }
                            />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="description">Product Description</label>
                        <textarea className="form-control"
                            id="description" rows="3"
                            value={ product.description }
                            />
                    </div>
                    <button type="submit" class="btn btn-warning mt-2 round">
                        <strong>📝 Edit Product</strong>
                    </button>
                </form>
            </div >
            : <div>Loadihg Product {id} Update ⌛ ⏳ ⏳</div>
    );
};

export default UpdateProductView;
