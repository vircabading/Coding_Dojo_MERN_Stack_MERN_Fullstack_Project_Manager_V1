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

    // //// SUBMIT UTILITY /////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // //// ON CHANGE UTILITY //////////////////////

    const handleChangeTitle = (e) => {
        setProduct({
            title: e.target.value,
            price: product.price,
            description: product.description
        });
    }

    const handleChangePrice = (e) => {
        setProduct({
            title: product.title,
            price: e.target.value,
            description: product.description
        });
    }

    const handleChangeDescription = (e) => {
        setProduct({
            title: product.title,
            price: product.price,
            description: e.target.value
        });
    }

    // //// OUTPUT /////////////////////////////////
    return (
        product
            ? <div >
                <h2>Update Product 📝:</h2>
                <p>{JSON.stringify(product)}</p>
                <hr />
                <form onSubmit={e => handleSubmit(e)} >
                    <div className="form-group mb-2">
                        <label htmlFor="title">Product Name</label>
                        <input type="text" className="form-control"
                            id="title" 
                            value={ product.title }
                            onChange={e => handleChangeTitle(e)}
                            />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="price">Product $ Price</label>
                        <input type="number" className="form-control"
                            id="price" min=".01" step="0.01"
                            value={ product.price }
                            onChange={e =>handleChangePrice(e)}
                            />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="description">Product Description</label>
                        <textarea className="form-control"
                            id="description" rows="3"
                            value={ product.description }
                            onChange={e => handleChangeDescription(e)}
                            />
                    </div>
                    <button type="submit" class="btn btn-warning mt-2 round">
                        <strong>✍🏼 Edit Product</strong>
                    </button>
                </form>
            </div >
            : <div>Loadihg Product {id} Update ⌛ ⏳ ⏳</div>
    );
};

export default UpdateProductView;
