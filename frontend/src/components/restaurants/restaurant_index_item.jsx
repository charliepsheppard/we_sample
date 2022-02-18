import React from 'react';


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantSamples: []
    }
  }

  componentDidMount() {
    this.props.fetchSamplesFromRestaurant(this.props.restaurant._id);
  }

  render() {
    console.log('restaurant index item props', this.props)
    return (
      <div>
        <h2>{this.props.restaurant.restaurantName}</h2>
          <p>{this.props.restaurant.address}</p>
          <button onClick={() => this.props.openModal('createSample')}>Create Sample</button>
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant._id)}>Delete Restaurant</button>
          <div className="sample-list">
            {}
          </div>
      </div>
    )
  };
}

export default RestaurantIndexItem;

