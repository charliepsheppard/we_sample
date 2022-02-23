import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchReviewsFromUser(this.props.user.id)
    }

    render() {
        console.log('state in review index', this.props.reviews)
        

        if(this.props.reviews === null) return null

        return(

        <div className='reviews-container'>
            <div className='reviews'>
                <h2>Your Reviews</h2>
                {this.props.reviews.map((review, i) => (
                    <ReviewItem key={i} review={review} deleteReview={this.props.deleteReview}/>
                ))}
            </div>
        </div>
        )
    }

}

export default ReviewIndex