import React, { useState, useEffect} from 'react';


////////////////////////////////////////////////////
//  UPDATE PRODUCT VIEW
////////////////////////////////////////////////////

const UpdateProductView = () => {
    // //// FIELDS /////////////////////////////////
    const [product, setProduct] = useState(null);

    // //// OUTPUT /////////////////////////////////
    return ( 
        product 
        ?   <div >
                <h2>Update Product:</h2>
            </div >
        :   <div>Loadihg Product Update ⌛ ⏳ ⏳</div>
    );
};

export default UpdateProductView;
