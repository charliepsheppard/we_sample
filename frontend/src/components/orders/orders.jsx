import React from 'react';
import OrderItemContainer from './order_item_container';

class Orders extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentOrders: []
    }
  }
  //check to see if there is a better use, possibly res/user boolean instead of checking for address
  componentDidMount() {
      this.props.fetchOrdersFromUser(this.props.user.id)
        .then(state => this.setState({currentOrders: this.props.orders}))
    // }
    
  }



  render(){
    if (this.props.orders === null) return null

    // console.log('props in orders.jsx', this.props)

    
    return (
      <div className='orders-list-container'> 
        <div className='order-list'>
          <h3>Current Orders For You</h3>
          
          {this.state.currentOrders.map((order, idx) => 
          <OrderItemContainer key={idx}
          deleteOrder={this.props.deleteOrder}
          order={order}
          userId={this.props.user.id}
          fetchRestaurant={this.props.fetchRestaurant}
          
          />
          )}
        </div>
      </div>
    )
  }
}

export default Orders