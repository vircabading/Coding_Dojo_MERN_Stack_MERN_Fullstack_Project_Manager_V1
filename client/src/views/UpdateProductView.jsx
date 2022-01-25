import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

////////////////////////////////////////////////////
//  UPDATE PRODUCT VIEW
////////////////////////////////////////////////////

const UpdateProductView = () => {
    // //// FIELDS /////////////////////////////////
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    // //// OUTPUT /////////////////////////////////
    return ( 
        product 
        ?   <div >
                <h2>Update Product:</h2>
            </div >
        :   <div>Loadihg Product { id } Update ⌛ ⏳ ⏳</div>
    );
};

export default UpdateProductView;
