import React, { useEffect, useState } from 'react';
import axios from 'axios';

////////////////////////////////////////////////////
//  ALL JOKES COMPONENT
////////////////////////////////////////////////////

const AllJokes = () => {
    const [ jokes, setJokes] = useState("Loading ⏳ ⏳ ⏳")

    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes")
            .then( res => {
                console.log("*** In axios get /api/jokes *** res.data.jokes:", JSON.stringify(res.data.jokes));
                setJokes(res.data.jokes);
            })
    }, []);

    return (
        <div>
            <h2>
            All Jokes: 
            </h2>
            {/* <p>Jokes: {JSON.stringify(jokes)}</p> */}
            {
                jokes.map((joke, idx) => {
                    return <div>
                            <p key={idx} className='text-warning'>Setup: {joke.setup}</p>
                            <p key={idx}>PunchLine: {joke.punchline}</p>
                        </div>
                })
            }

        </div>
    );
};

export default AllJokes;