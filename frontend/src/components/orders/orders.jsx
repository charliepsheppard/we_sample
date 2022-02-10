import React from 'react';
import OrderItemContainer from './order_item_container';

class OrdersPlaced extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: this.props.orders,
    }
    this.pastArr = []
    this.upcomingArr = []
    this.timeDeterminer = this.timeDeterminer.bind(this)
  }
  //check to see if there is a better use, possibly res/user boolean instead of checking for address
  componentDidMount() {
    this.props.clearOrders();
    if (this.props.user.address) {
      this.props.fetchOrdersFromRestaurant(this.props.user.id)
        .then(state => this.setState({orders: this.props.orders}))
    } else {
      this.props.fetchOrdersFromUser(this.props.user.id)
        .then(state => this.setState({orders: this.props.orders}))
    }
    
  }

  componentWillUnmount() {
    this.setState({});
    this.props.clearOrders();
  }

  timeDeterminer() {
    let today = new Date()
    for(let i = 0; i < this.state.orders.length; i++) {
      let compDate = new Date(this.state.orders[i].date)
      if(compDate.getTime() < today.getTime()) {
        if(!this.pastArr.includes(this.state.orders[i])) {
          this.pastArr.push(this.state.orders[i])
        }
      }
      else {
        if(!this.upcomingArr.includes(this.state.orders[i])) {
          this.upcomingArr.push(this.state.orders[i])
        }
      }
    }
  }

  render(){
    if (this.props.orders === null) return null
    this.timeDeterminer()
    return (
      <div className='orders-list-container'> 
        <div className='order-list'>
          <h3>past orders</h3>
          {this.pastArr.map((order, idx) => 
          <OrderItemContainer key={idx}
          deleteOrder={this.props.deleteOrder}
          order={order}
          userId={this.props.user.id}
          passed = {true}
          />
          )}
        </div>
        <div className='order-list'>
          <h3>upcoming orders</h3>
          {this.upcomingArr.map((order, idx) => 
          <OrderItemContainer key={idx}
          deleteOrder={this.props.deleteOrder}
          order={order}
          userId={this.props.user.id}
          passed = {false}
          />
          )}
        </div>
      </div>
    )
  }
}

export default OrdersPlaced