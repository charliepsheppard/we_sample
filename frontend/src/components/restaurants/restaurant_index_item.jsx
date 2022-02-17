import React from 'react';

class RestaurantIndexItem extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.restaurant.restaurantName}</h2>
          <p>{this.props.restaurant.address}</p>
          <button onClick={() => this.props.openModal('createSample')}>Create Sample</button>
      </div>
    )
  };
}

export default RestaurantIndexItem;

