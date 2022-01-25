import React from 'react';
import { useHistory } from 'react-router-dom';

////////////////////////////////////////////////////
//  HOME REDIRECT COMPONENT
////////////////////////////////////////////////////

/**
 * Redirect to Home Route
 * @returns Nothing
 */
const HomeRedirectComp = () => {
    // //// FIELDS /////////////////////////////////
    const history = useHistory();

    // //// RE-DIRECT TO HOME //////////////////////
    history.push("/products")

    return <div></div>;
};

export default HomeRedirectComp;
