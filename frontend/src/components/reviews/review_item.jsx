import React from 'react'

const ReviewItem = (props) => {
    console.log('props in review item', props.review)
    return (
        <div className='review-item-container'>
            <h2>
                <div className='review-title'>{props.review.title}</div>
            </h2>
            <p className='review-body'>{props.review.body}</p>
            <button onClick={ () => props.deleteReview(props.review._id)} >Delete Review</button>
        </div>
    )
}

export default ReviewItem;