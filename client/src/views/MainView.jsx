import React from 'react'
import { Link, Route } from 'react-router-dom';

import Home from './HomeView';
import AddProduct from './AddProductView';
import ProductView from './ProductView';

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
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/new">
                            <AddProduct />
                        </Route>
                        <Route path="/:id">
                            <ProductView />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main