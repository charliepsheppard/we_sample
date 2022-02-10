import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class SampleIndexItem extends React.Component {
  render() {
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
                  <p className='card-text'><b> Price :${this.props.sample.price}</b></p>
                  <a href="#" className="btn btn-primary">Add to My Samples</a>
                </div>
            </div> 
            
        </div> 


    )
  };
}

export default SampleIndexItem;