import React from 'react'

class ReviewItem extends React.Component {
constructor(props) {
    super(props)

    this.state = {
        review: this.props.review
    }
} 
    

    render() {
        console.log('props in review item', this.props.review)
        return (
            <div className='review-item-container'>
                <h2>
                    <div className='review-title'>{this.props.review.title}</div>
                </h2>
                <p className='review-body'>{this.props.review.body}</p>
                <button onClick={ () => this.props.deleteReview(this.props.review._id).then(this.setState({review: null}))} >Delete Review</button>
            </div>
        )
    }
}

export default ReviewItem;