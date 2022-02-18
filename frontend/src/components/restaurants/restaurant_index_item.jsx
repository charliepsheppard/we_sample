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

    if (!this.props.restaurantSamples) {
      console.log('hitting the null check')
    return null

    } else {
      console.log('missing the null check')
      return (
        <div className="your-restaurants">
          <br />
          <br />
          <h2>{this.props.restaurant.restaurantName}</h2>
            <p>{this.props.restaurant.address}</p>
            <button onClick={() => this.props.openModal({method: 'createSample', restaurantId: this.props.restaurant._id})}>Create Sample</button>
            <button onClick={() => this.props.deleteRestaurant(this.props.restaurant._id)}>Delete Restaurant</button>
            <div className="sample-list">
            {console.log("res samples in index item",this.props.restaurantSamples)}
              {/* {this.props.restaurantSamples.map((sample, i) => (
                <SampleIndexItemContainer sample={sample} key={i} user={this.props.user}/>
              ))} */}
            </div>
        </div>
      )
    }
    // console.log('restaurant index item props', this.props)
  };
}

export default RestaurantIndexItem;

