import React from 'react'
import { Link, Route } from 'react-router-dom';

import HomeRedirectComp from '../components/HomeRedirectComp';
import Home from './HomeView';
import AddProduct from './AddProductView';
import ProductView from './ProductView';
import UpdateProductView from './UpdateProductView';
import DeleteProductComp from '../components/DeleteProductComp';

////////////////////////////////////////////////////
//  MAIN VIEW
////////////////////////////////////////////////////

/**
 * MAIN VIEW
 * @returns HTML for Main Body
 */
const Main = () => {
    // //// OUTPUT /////////////////////////////////
    return (
        <main role="main">
            <div className='container mt-4'>
                <div className='row bg-dark p-3 rounded'>
                    <div className="col">
                        {/* **** Root Re-Directs to Home Route ******** */}
                        <Route exact path="/">
                            <HomeRedirectComp />
                        </Route>
                        {/* **** Home Route ******** */}
                        <Route exact path="/products">
                            <Home />
                        </Route>
                        {/* **** Create Product Route ******** */}
                        <Route exact path="/products/new">
                            <AddProduct />
                        </Route>
                        {/* **** Retrieve Product Route ********* */}
                        <Route path="/products/:id/retrieve">
                            <ProductView />
                        </Route>
                        {/* **** Update Product Route ********* */}
                        <Route path="/products/:id/update">
                            <UpdateProductView />
                        </Route>
                        {/* **** Delete Product Route ********* */}
                        <Route path="/products/:id/delete">
                            <DeleteProductComp />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main