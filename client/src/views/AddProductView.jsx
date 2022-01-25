import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

////////////////////////////////////////////////////
//  ADD PRODUCT VIEW
////////////////////////////////////////////////////

/**
 * ADD PRODUCT VIEW
 * @returns HTML for displaying a form to ad a product
 */
const AddProduct = () => {
    // //// FIELDS /////////////////////////////////
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/products/new", {
            title, price, description
        })
            .then(res => {
                console.log("🌈🦄🌈 Submitted to Create New Product 🌈🦄🌈:", res);
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    // //// OUTPUT /////////////////////////////////
    return (<div>
        <h2>Add A New Product 🎁</h2>
        <hr />
        <form onSubmit={ e => handleSubmit(e) } >
            <div className="form-group mb-2">
                <label htmlFor="title">Product Name</label>
                <input  type="text" className="form-control" 
                        id="title" placeholder="Enter product name"
                        value={ title }
                        onChange={ e => setTitle(e.target.value) }  />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="price">Product $ Price</label>
                <input  type="number" className="form-control" 
                        id="price" min=".01" step="0.01"
                        value={ price } 
                        onChange={ e => setPrice(e.target.value) } />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="description">Product Description</label>
                <textarea   className="form-control" 
                            id="description" rows="3"
                            placeholder='Enter product description'
                            value={ description }
                            onChange={ e => setDescription( e.target.value ) } />
            </div>
            <button type="submit" class="btn btn-primary mt-2 round">
                <strong>Submit New Product</strong>
            </button>
        </form>
    </div>)
}

export default AddProduct