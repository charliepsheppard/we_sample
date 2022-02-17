import React from 'react';

class RestaurantIndexItem extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.restaurant.restaurantName}</h2>
          <p>{this.props.restaurant.address}</p>
      </div>
    )
  };
}

export default RestaurantIndexItem;

