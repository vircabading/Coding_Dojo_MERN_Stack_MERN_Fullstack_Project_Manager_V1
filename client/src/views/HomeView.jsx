import React from 'react'
import { Link } from 'react-router-dom';

import AllProducts from '../components/AllProductsComp';

////////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

/**
 * HOME VIEW
 * @returns HTML for A Welcome Banner and Display All Products
 */
const Home = () => {
    // //// OUTPUT //////////////////////////////////////////
    return (<div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <h1>Welcome to Product Manager 📃</h1>
            <Link to={"/new"}>
                <button className='btn btn-sm btn-success round'>
                    <strong>➕ Add New Product</strong>
                </button>
            </Link>
        </div>
        <hr />
        <AllProducts />
    </div>)
}

export default Home