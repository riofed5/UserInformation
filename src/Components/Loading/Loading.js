import React from 'react'
import loadingGif from '../../images/gif/loading-arrow.gif';
const Loading = () => {
    return (
        <div className="loading">
            <h4>User info is loading</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}

export default Loading