import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            reviewerId: this.props.user.id,
            // restaurantId: this.props.match.params.restaurantId,
            orderId: this.props.order._id,
            title: '',
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleSubmit(e) {
        e.preventDefault()
        const review = Object.assign({}, this.state)
        this.props.createReview(review).then(() => {
            this.setState({
                reviewerId: this.props.user.id,
                // restaurantId: this.props.match.params.restaurantId,
                orderId: this.props.order._id,
                title: '',
                body: ''
            })
        })
        
    }


    render() {
        return(
            <div>
                <form className='review-form'>
                    <h3 className='appointment-form-title'>Review your Experience</h3>
                    
                <div className='textContainer'>
                    <div className='float-label-field'>
                        <label>Title 
                            <input id='text-area' type="text" placeholder='Give your review a descriptive title' value={this.state.title} onChange={this.handleChange('title')}/>
                        </label>
                    </div>

                    <div className='float-label-field'>
                        <label>Body 
                            <input id='text-area' type="text" placeholder='How was your experience?' value={this.state.body} onChange={this.handleChange('body')}/>
                        </label>
                    </div>

                </div>
                    <button onClick={this.handleSubmit}>Submit your Review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm)