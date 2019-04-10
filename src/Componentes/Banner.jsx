import React from 'react';

export default function Banner(props){
    document.title="HN Feed"
    return(
        <>
        <div className="banner">
            <h1>HN Feed</h1>
            <h3>We 3 hacker News!</h3>
        </div>          
        </>
    )
}