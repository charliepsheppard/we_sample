import React from 'react';
import RestaurantIndexItemContainer from './restaurant_index_item_container';

class RestaurantsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('params in res index', this.props)

    this.props.match.path === '/:userId/restaurants' ?
    this.props.fetchUsersRestaurants(this.props.user.id) :
    this.props.fetchRestaurants();
  }

  render() {
    const { openModal, closeModal, createSample, fetchSamplesFromRestaurant, deleteRestaurant } = this.props;
    if (!this.props.restaurants) {
      return null;
    } else {
      return (
        <div className="your-restaurants-page">
          <br />
            {/* <h3>Your Restaurants</h3> */}
          <br />
        <div className="restaurants-container">
              {
                this.props.restaurants.map(restaurant => <RestaurantIndexItemContainer 
                    key={restaurant._id} 
                    restaurant={restaurant}
                    deleteRestaurant={deleteRestaurant}
                    openModal={openModal}
                    closeModal={closeModal}
                    createSample={createSample}
                    // fetchSamplesFromRestaurant={fetchSamplesFromRestaurant}
                  />)
              }
              
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
      )
    }
  };
}

export default RestaurantsIndex;