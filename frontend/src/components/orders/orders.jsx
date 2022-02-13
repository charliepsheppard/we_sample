import React from 'react';
import OrderItemContainer from './order_item_container';

class Orders extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentOrders: []
    }
    // this.timeDeterminer = this.timeDeterminer.bind(this)
  }
  //check to see if there is a better use, possibly res/user boolean instead of checking for address
  componentDidMount() {
    // this.props.clearOrders();
    // if (this.props.user.address) {
    //   this.props.fetchOrdersFromRestaurant(this.props.user.id)
    //     .then(state => this.setState({orders: this.props.orders}))
    // } else {
      console.log('props in user orders',this.props)
      this.props.fetchOrdersFromUser(this.props.user.id)
        .then(state => this.setState({currentOrders: this.props.orders}))
    // }
    
  }

  // componentWillUnmount() {
  //   this.setState({});
  //   this.props.clearOrders();
  // }

  // timeDeterminer() {
  //   let today = new Date()
  //   for(let i = 0; i < this.state.orders.length; i++) {
  //     let compDate = new Date(this.state.orders[i].date)
  //     if(compDate.getTime() < today.getTime()) {
  //       if(!this.pastArr.includes(this.state.orders[i])) {
  //         this.pastArr.push(this.state.orders[i])
  //       }
  //     }
  //     else {
  //       if(!this.upcomingArr.includes(this.state.orders[i])) {
  //         this.upcomingArr.push(this.state.orders[i])
  //       }
  //     }
  //   }
  // }

  render(){
    if (this.props.orders === null) return null
    // this.timeDeterminer()
    console.log('props in user orders render',this.props)

    
    return (
      <div className='orders-list-container'> 
        <div className='order-list'>
          <h3>Current Orders </h3>
          <p>for {this.props.user.firstName}</p>
          {this.state.currentOrders.map((order, idx) => 
          <OrderItemContainer key={idx}
          deleteOrder={this.props.deleteOrder}
          order={order}
          userId={this.props.user.id}
          fetchRestaurant={this.props.fetchRestaurant}
          // passed = {true}
          />
          )}
        </div>
      </div>
    )
  }
}

export default Orders