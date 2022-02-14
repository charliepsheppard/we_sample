import React from 'react';
import { fetchReviewsFromUser } from '../../actions/review_actions';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usersReviews: []
        }
    }

    componentDidMount() {
        this.props.fetchReviewsFromUser(this.props.user.id)
            .then(state => this.setState({usersReviews: this.props.reviews}))
    }

    render() {
        console.log('state in review index', this.state)
        

        if(this.props.reviews === null) return null

        return(

        <div className='reviews-container'>
            <div className='reviews'>
                <h2>Your Reviews</h2>
                {this.state.usersReviews.map((review, i) => (
                    <ReviewItem key={i} review={review} deleteReview={this.props.deleteReview}/>
                ))}
            </div>
        </div>
        )
    }

}

export default ReviewIndex