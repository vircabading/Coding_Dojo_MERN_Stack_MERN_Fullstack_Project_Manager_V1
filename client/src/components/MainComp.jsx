import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

////////////////////////////////////////////////////
//  MAIN COMPONENT
////////////////////////////////////////////////////

/**
 * //// MAIN COMPONENT //////////////////////////////////////
 * @returns HTML for Main Body
 */
const Main = () => {
    // //// OUTPUT //////////////////////////////////////////
    return (
        <main role="main">
            <div className='container mt-4'>
                <div className='row bg-dark p-3 rounded'>
                    <div className="col">
                        <h1>Welcome to Main</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main