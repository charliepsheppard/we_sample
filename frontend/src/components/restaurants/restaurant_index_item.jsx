import React from 'react';
import SampleIndexItemContainer from '../sample_index/sample_index_item_container';


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   restaurantSamples: []
    // }
  }

  componentDidMount() {
    console.log('restaurant index item CDM', this.props)
    this.props.fetchSamplesFromRestaurant(this.props.restaurant._id);
  }

  render() {

    if (!this.props.restaurantSamples) return null;
    // console.log('restaurant index item props', this.props)
    return (
      <div className="your-restaurants">
        <br />
        <br />
        <h2>{this.props.restaurant.restaurantName}</h2>
          <p>{this.props.restaurant.address}</p>
          <button onClick={() => this.props.openModal({method: 'createSample', restaurantId: this.props.restaurant._id})}>Create Sample</button>
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant._id)}>Delete Restaurant</button>
          <div className="sample-list">
          
            {/* {this.props.restaurantSamples.map((sample) => (
              <SampleIndexItemContainer sample={sample} />
            ))} */}
          </div>
      </div>
    )
  };
}

export default RestaurantIndexItem;

