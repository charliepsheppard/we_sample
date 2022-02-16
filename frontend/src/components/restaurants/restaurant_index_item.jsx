import React from 'react';

class RestaurantIndexItem extends React.Component {
  render() {
    return (
      <li>{this.props.restaurant.restaurantName}</li>
    )
  };
}

export default RestaurantIndexItem;

