import React from 'react';
import { Link } from 'react-router-dom';
import Confirm from "../restaurants/confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import "@reach/dialog/styles.css"

class SampleIndexItemSearched extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sample: this.props.sample
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // console.log('this might have fired')
    const order = { 
      // user: this.props.user,
      sample: this.props.sample.sampleItem,
      userId: this.props.user.id,
      restaurantId: this.props.sample.restaurantId
    }
    this.props.createOrder(order);
  }

  handleDeleteSample = () => {
  this.props.deleteSample(this.props.sample._id);
  this.setState({sample: null})
  }
  

  render() {
    // console.log('from sample index item', this.props);
    return (
        <div className='sample-item'>

            {/* <p>{this.props.sample.sampleItem}</p> */}
            {/* <p>{this.props.sample.description}</p> */}
            {/* <p>{this.props.sample.price}</p> */}
            {/* <p>{this.props.sample.restaurant}</p> */}


            <div className="card">
              
                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">{this.props.sample.sampleItem}</h5>
                  <p className="card-text">{this.props.sample.description}</p>
                  <p className='card-price'><b> Price :${this.props.sample.price}</b></p>
                  <button onClick={this.handleClick}>Add to My Orders</button>
                  
                  <Confirm title="Confirm" description="Are you sure you want to delete?">
                    {confirm => (
                      <button onClick={confirm(this.handleDeleteSample)}>Delete Sample</button>
                      )}
                  </Confirm>
                    {/* {console.log('state after click',this.state)} */}
                  
                  {/* <Link to={`/users/${this.props.user.id}`} className="btn-primary2">View my samples</Link> */}
                </div>
            </div> 
            
        </div> 


    )
  };
}

export default SampleIndexItemSearched;