import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsersRestaurants(this.props.user.id);
  }

  render() {
    if (!this.props.restaurants) {
      return null;
    } else {
      return (
        <div className="restaurants-container">
            <h2>Your Restaurants</h2>
              {
                this.props.restaurants.map(restaurant => <RestaurantIndexItem key={restaurant._id} restaurant={restaurant} />)
              }
        </div>
      )
    }
  };
}

export default RestaurantsIndex;