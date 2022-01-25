import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

////////////////////////////////////////////////////
//  DELETE PRODUCT COMPONENT
////////////////////////////////////////////////////

const DeleteProductComp = () => {
    // //// FIELDS /////////////////////////////////
    const { id } = useParams();

    return <div>Delete Product Component | id: { id }</div>;
};

export default DeleteProductComp;
