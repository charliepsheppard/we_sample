import React from 'react';
import SampleIndexItem from '../sample_index/sample_index_item';
import Confirm from "./confirm"
import "@reach/dialog/styles.css"

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   restaurantSamples: this.props.restaurantSamples,
    // }
   
  }

  componentDidMount() {
    this.props.fetchSamplesFromRestaurant(this.props.restaurant._id);
    console.log('restaurant index item CDM', this.props)
  }

  handleDelete = () => this.props.deleteRestaurant(this.props.restaurant._id)

  render() {

    if (this.props.restaurantSamples ===  undefined) {
      console.log('hitting the null check')
      return null

    } 

    // let thisResSamples = Object.values(this.props.restaurantSamples[this.props.restaurant._id]);

      return (
        <div className="your-restaurants">
          <br />
          <br />
          <h2>{this.props.restaurant.restaurantName}</h2>
            <p>{this.props.restaurant.address}</p>
            <button onClick={() => this.props.openModal({method: 'createSample', restaurantId: this.props.restaurant._id})}>Create Sample</button>
            {/* <button onClick={() => this.props.deleteRestaurant(this.props.restaurant._id)}>Delete Restaurant</button> */}
            <Confirm title="Confirm" description="Are you sure you want to delete?">
            {confirm => (
             <button onClick={confirm(this.handleDelete)}>Delete Restaurant</button> 
              )}
            </Confirm>
            <div className="sample-list">
            {console.log("res samples in index item",this.props)}
            
              {this.props.restaurantSamples.map((sample, i) => (
                
                <SampleIndexItem sample={sample} key={i} user={this.props.user}/>
              ))}
            </div>
        </div>
      )
    
    // console.log('restaurant index item props', this.props)
  };
}

export default RestaurantIndexItem;

