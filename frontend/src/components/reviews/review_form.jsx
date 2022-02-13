import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            reviewerId: this.props.userId,
            // restaurantId: this.props.match.params.restaurantId,
            orderId: this.props.order._id,
            title: '',
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
    }

    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleSubmit(e) {
        e.preventDefault()
        const review = Object.assign({}, this.state)
        this.props.createReview(review).then(() => {
            this.setState({
                reviewerId: this.props.user,
                // restaurantId: this.props.match.params.restaurantId,
                orderId: this.props.order._id,
                title: '',
                body: ''
            })
        }).then(() => this.props.history.push(`/users/${this.props.user}`))
    }


    render() {
        return(
            <div>
                <form className='review-form'>
                    <h3 className='appointment-form-title'>Review your Experience</h3>
                <label className='textContainer'>
                    <label>Title
                        <input type="text" placeholder='Give your review a descriptive title' value={this.state.title} onChange={this.handleChange('title')}/>
                    </label>

                    <label>Body
                        <input type="text" placeholder='How was your experience?' value={this.state.body} onChange={this.handleChange('body')}/>
                    </label>

                </label>
                    <button onClick={this.handleSubmit}>Submit your review</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm