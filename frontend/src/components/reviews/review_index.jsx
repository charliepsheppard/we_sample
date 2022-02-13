import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {


    render() {
        <div className='reviews-container'>
            <div className='reviews'>
                {this.props.reviews.map((review, i) => (
                    <ReviewItem key={i} review={review}/>
                ))}
            </div>
        </div>
    }

}

export default ReviewIndex