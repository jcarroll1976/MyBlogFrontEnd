import React from 'react'
import "./SinglePost.css"

function SinglePost() {
  return (
    <div className='singlePost-container'>
        <div className='post-container'>
            <div className='post-image'></div>
            <div className='post-content'></div>
        </div>
        <div className='author-content'></div>
    </div>
  )
}

export default SinglePost