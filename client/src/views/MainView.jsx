import React from 'react'
import { Link, Route } from 'react-router-dom';

import Home from './HomeView';
import AddProduct from './AddProductView';

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
                        <Route exact path="/new">
                            <AddProduct />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main