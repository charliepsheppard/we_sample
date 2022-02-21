import React from 'react';
import SampleIndexItem from '../sample_index/sample_index_item';


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchSamplesFromRestaurant(this.props.restaurant._id);
    // console.log('restaurant index item CDM', this.props)
  }

  render() {

    if (this.props.restaurantSamples ===  undefined) {
      // console.log('hitting the null check')
      return null

    } 



      return (
        <div className="your-restaurants">
          <br />
          <br />
          <h2>{this.props.restaurant.restaurantName}</h2>
            <p>{this.props.restaurant.address}</p>
            <button onClick={() => this.props.openModal({method: 'createSample', restaurantId: this.props.restaurant._id})}>Create Sample</button>
            <button onClick={() => this.props.deleteRestaurant(this.props.restaurant._id)}>Delete Restaurant</button>
            
            <div className="sample-list">
            
              {this.props.restaurantSamples.map((sample, i) => (               
                
                <SampleIndexItem sample={sample} key={i} user={this.props.user}/>
              ))}
            </div>
        </div>
      )
    
  };
}

export default RestaurantIndexItem;

