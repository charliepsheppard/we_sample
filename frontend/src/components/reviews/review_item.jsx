import React from 'react'

const ReviewItem = (props) => {
    return (
        <div className='review-item-container'>
            <h2>
                <div className='review-title'>{props.review.title}</div>
            </h2>
            <p className='review-body'>{props.review.body}</p>
        </div>
    )
}

export default ReviewItem;