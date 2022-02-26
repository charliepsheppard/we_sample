import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Confirm from "../restaurants/confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import "@reach/dialog/styles.css"

class SampleIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sample: this.props.sample
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const order = { 
      // user: this.props.user,
      sample: this.props.sample.sampleItem,
      userId: this.props.user.id,
      restaurantId: this.props.sample.restaurantId
    }
    this.props.createOrder(order);
  }


  // componentDidUpdate(prevProp) {
  //   if (this.props.sample !== prevProp.sample) {
  //     this.props.fetchSamplesFromRestaurant(prevProp.sample.restaurantId)
  //   }
  // }

  handleDeleteSample = () => {
    return this.props.deleteSample(this.props.sample._id)  
      .then(() => {this.setState({sample: null})})
      // .then(() => this.props.history.go(0))
      .then(() => {console.log('state after', this.state)})
  }
    
  
  

  render() {
    // console.log('from sample index item', this.props);
    return (
        <div className='sample-item'>


            <div className="card">
              
                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <a href="https://placeholder.com"><img src='https://via.placeholder.com/150.png'/></a>
                  <h5 className="card-title">{this.props.sample.sampleItem}</h5>
                  <p className="card-text">{this.props.sample.description}</p>
                  <p className='card-price'><b> Price :${this.props.sample.price}</b></p>
                  <button onClick={this.handleClick}>Add to My Orders</button>
                  
                {/* {console.log('props ins sample index item',this.props)} */}
                  <Confirm title="Confirm" description="Are you sure you want to delete?">
                    {confirm => (
                      <button onClick={confirm(this.handleDeleteSample)}>Delete Sample</button>
                      )}
                  </Confirm>
                    
                  
                  <Link to={`/users/${this.props.user.id}`} className="btn-primary2">View my orders</Link>
                </div>
            </div> 
            
        </div> 


    )
  };
}

export default withRouter(SampleIndexItem);