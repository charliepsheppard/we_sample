import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewEditForm extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      reviewerId: this.props.user.id,
      // restaurantId: this.props.order.restaurant,
      // orderId: this.props.order._id,
      title: this.props.review.title,
      body: this.props.review.body,
      _id: this.props.review._id,
      // sampleName: this.props.sampleName
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchReview(this.props.review._id);
    
  // }



  handleChange(field) {
    return e => { this.setState({ [field]: e.currentTarget.value }) }
  }

  handleSubmit(e) {
    e.preventDefault()

    const review = Object.assign({}, this.state);
    console.log("review in submit",review)
    this.props.updateReview(review);
    this.props.history.replace(`/users/${this.props.user.id}`)

    // const review = Object.assign({}, this.state)
    // this.props.updateReview(review).then(() => {
    //   console.log('create ran')
    //   this.setState({
    //     reviewerId: this.props.user.id,
    //     restaurantId: this.props.order.restaurant,
    //     orderId: this.props.order._id,
    //     title: '',
    //     body: '',
    //     sampleName: this.props.sampleName
    //   })
    // })

  }

  render() {

    if(!this.props.review) {
      return null
    }
    
    return (
      <div className='form-div'>
        <form className='review-form' onSubmit={this.handleSubmit}>
          <h3 className='appointment-form-title'>Review your Experience</h3>

          <div className='textContainer'>
            <div className='float-label-field'>
              <label>Title
                <input id='text-area' type="text" value={this.state.title} onChange={this.handleChange('title')} />
              </label>
            </div>

            <div className='float-label-field'>
              <label>Body
                <input id='text-area' type="text" value={this.state.body} onChange={this.handleChange('body')} />
              </label>
            </div>

          </div>
          <button>Submit your Review</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewEditForm);