import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

////////////////////////////////////////////////////
//  DELETE PRODUCT COMPONENT
////////////////////////////////////////////////////

const DeleteProductComp = () => {
    // //// FIELDS /////////////////////////////////
    const { id } = useParams();
    const history = useHistory();

    // //// DELETE ITEM ////////////////////////////
    axios.delete("http://localhost:8000/api/products/delete/" + id)
        .then(res => console.log(res))
        .then(() => history.push("/products"))
        .catch(err => console.log(err));

    return <div>Delete Product Component | id: { id }</div>;
};

export default DeleteProductComp;
