import React from 'react';
import { Link } from "react-router-dom";
import ReviewFormContainer  from '../reviews/review_form_container'

class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: this.props.order,
      open: false,
    }
  }

  renderLink() {
      return <Link className="order-restaurant-name" to={`/restaurant/${this.state.order.restaurantId}`}>{this.state.order.restaurantName}</Link>
    // }
  }

  

  fetchRestaurant = this.props.fetchRestaurant;


  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      }
    })
  }

  render() {
    if (this.state.order === null ) return null
    
    console.log('props in order item', this.props)


    return(
      <div className='order-item-container'>
        <h3 className='order-with'>Order with: {this.renderLink()}</h3>
        <div className='order-details-container'>
          <h2>Your order contains the following samples: </h2>
          <p>{this.state.order.sample}</p>
          
        </div>
        
          {/* {this.state.order.imageUrl ? <div className = "order-item-ref-pic"><p>reference pic</p><div className = "featured-restaurant-profile-pic" restaurant = {{backgroundImage : `url(${this.state.order.imageUrl})`}} /></div> : null} */}
        
          <br />
          <p className='order-description'>We hoped you enjoyed your order with {this.state.order.restaurantName}!<br/>Let us know how it was by leaving a review!</p>
          <button className='cancel-order' onClick={ () => this.props.deleteOrder(this.state.order._id).then(this.setState({order: null}))}>Cancel Order</button>  

        <div className='review-form-container' id='displayReview'>

          <div className='review-container'>
          
            <button type='button' className='button' onClick={this.handleButtonClick}>Leave a Review</button>
            {this.state.open && (
            <div className='dropdown'>
            <ReviewFormContainer order={this.props.order} sampleName={this.props.order.sample} handleButtonClick={this.handleButtonClick}/>
            </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default OrderItem