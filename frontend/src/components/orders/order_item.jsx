import React from 'react';
import { Link } from "react-router-dom";

class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: this.props.order,
      passed: this.props.passed
    }
  }

  renderLink() {
      //double check where userId is coming from, see if this val is for both restaurants and users
    if (this.props.restaurantId === this.props.order.restaurantId) {
      return <p>{this.state.order.userName}</p>
    } else {
      return <Link className="order-restaurant-name" to={`/restaurant/${this.state.order.restaurantId}`}>{this.state.order.restaurantName}</Link>
    }
  }

  renderDate() {
    const { date } = this.state.order;
    const date2 = new Date(date)
    const day = date.slice(8,10)
    const weekdayArray = [];
    weekdayArray[0] = "Monday";
    weekdayArray[1] = "Tuesday";
    weekdayArray[2] = "Wednesday";
    weekdayArray[3] = "Thursday";
    weekdayArray[4] = "Friday";
    weekdayArray[5] = "Saturday";
    weekdayArray[6] = "Sunday";
    const weekDay = weekdayArray[date2.getDay()]
    const monthArray = [];
    monthArray[0] = "Jan";
    monthArray[1] = "Feb";
    monthArray[2] = "Mar";
    monthArray[3] = "Apr";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "Aug";
    monthArray[8] = "Sept";
    monthArray[9] = "Oct";
    monthArray[10] = "Nov";
    monthArray[11] = "Dec";
    let month = monthArray[date2.getMonth()];
    let year = date2.getFullYear()
    return month + " " + day + ", " + weekDay + ", " + year
  }

  render() {
    if (this.state.order === null ) return null
    return(
      <div className='order-item-container'>
        <h3 className='order-with'>order with: {this.renderLink()}</h3>
        <div className='appointment-details-container'>
            //not sure the equivalent to styleType...
          <p>{this.state.order.sample.name}</p>
          <p>{this.renderDate()}</p>
          <p>{this.state.order.timeFrame}</p>
        </div>
        //check to see how this imageUrl gets passed to order. does it come from samples? what if multiple?
          {this.state.order.imageUrl ? <div className = "order-item-ref-pic"><p>reference pic</p><div className = "featured-restaurant-profile-pic" restaurant = {{backgroundImage : `url(${this.state.order.imageUrl})`}} /></div> : null}
          {this.state.order.message ? <p>message: <br/>{this.state.order.message}</p> : null}
          {this.state.passed ? <p>We hoped you enjoyed your order with {this.state.order.restaurantName}!<br/>Let us know how it was by leaving a review on their profile!</p> : <button className='cancel-order' onClick={ () => this.props.deleteOrder(this.state.order._id).then(this.setState({order: null}))}>cancel order</button>}
      </div>
    )
  }
}

export default OrderItem