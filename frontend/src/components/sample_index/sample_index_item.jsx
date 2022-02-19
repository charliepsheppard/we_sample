import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

class SampleIndexItem extends React.Component {
  constructor(props) {
    super(props)

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

  render() {
    // console.log('from sample index item', this.props.sample);
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
                  <Link to={`/users/${this.props.user.id}`} className="btn-primary2">View my samples</Link>
                </div>
            </div> 
            
        </div> 


    )
  };
}

export default SampleIndexItem;