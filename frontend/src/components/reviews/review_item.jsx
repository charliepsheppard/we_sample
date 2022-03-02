import React from 'react'
import Confirm from "../restaurants/confirm"
import "@reach/dialog/styles.css"
import { Link } from 'react-router-dom';

class ReviewItem extends React.Component {
constructor(props) {
    super(props)

    this.state = {
        review: this.props.review
    }
} 
    handleDeleteReview = () => this.props.deleteReview(this.props.review._id).then(this.setState({review: null}))

    render() {
        // console.log('props in review item', this.props)
        return (
            <div className='review-item-container'>
                <h2>
                    <div className='review-title'>{this.props.review.title}</div>
                </h2>
                <p className='review-body'>{this.props.review.body}</p>
                <p className='review-body'>{this.props.review.sampleName}</p>
                <Link to={`/reviews/${this.props.review._id}/edit`}><button>Edit Review</button></Link>

                <Confirm title="Confirm" description="Are you sure you want to delete?">
                    {confirm => (
                        <button onClick={confirm(this.handleDeleteReview)}>Delete Review</button>
                    )}
                </Confirm>
            </div>
        )
    }
}

export default ReviewItem;