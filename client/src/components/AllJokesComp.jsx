import React, { useEffect, useState } from 'react';
import axios from 'axios';

////////////////////////////////////////////////////
//  ALL JOKES COMPONENT
////////////////////////////////////////////////////

const AllJokes = () => {
    const [ message, setMessage] = useState("Loading ⏳ ⏳ ⏳")

    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes")
            .then( res => {
                console.log("*** In axios get /api/jokes *** res.data:", JSON.stringify(res.data));
                setMessage(res.data);
            })
    }, []);

    return (
        <div>
            <h2>
            All Jokes: {message}
            </h2>
        </div>
    );
};

export default AllJokes;