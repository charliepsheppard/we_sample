import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    if (!this.props.restaurants) {
      return null;
    } else {
      return (
        <div>
          <ul className="restaurant-items">
              {
                this.props.restaurants.map(restaurant => <RestaurantIndexItem key={restaurant._id} restaurant={restaurant} />)
              }
          </ul>
        </div>
      )
    }
  };
}

export default RestaurantsIndex;