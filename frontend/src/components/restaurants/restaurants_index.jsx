import React from 'react';
import RestaurantIndexItemContainer from './restaurant_index_item_container';

class RestaurantsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props)
    this.props.match.path === '/:userId/restaurants' ?   
    this.props.fetchUsersRestaurants(this.props.user.id) :
    this.props.fetchRestaurants();

  }

  render() {
    const { openModal, closeModal, createSample, } = this.props;
    if (!this.props.restaurants) {
      return null;
    } else {
      // console.log("restaurants in index",this.props.restaurants)
      return (
        <div className="your-restaurants-page">
          <br />
            <h3>Restaurants</h3>
          <br />
        <div className="restaurants-container">
              {
                this.props.restaurants.map(restaurant => 
                
                <RestaurantIndexItemContainer 
                    key={restaurant._id} 
                    restaurant={restaurant}
                    
                    openModal={openModal}
                    closeModal={closeModal}
                    createSample={createSample}
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