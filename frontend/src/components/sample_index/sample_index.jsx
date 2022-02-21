import React from 'react'
import SampleIndexItemContainer from './sample_index_item_container';
import { createOrder } from '../../actions/order_actions';

class SampleIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    //   imageUrl: "",
    //   restaurantId: this.props.user.id,
      description: "",
      sampleItem: "",
      price: "",
    }

  }

  componentDidMount() {
    this.props.fetchSamples();
    // console.log("state from sample index", this.props)
  }


//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     })
//   }

  render() {
      // console.log("props from sample index render", this.props.samples)
    if (!this.props.samples) {
      return null;
    } else {
      return (

        <div className='body'>

            <div className='sample-items-container'>
            <ul className="sample-items">
                {
                    this.props.samples.map((sample, idx) => <SampleIndexItemContainer key={idx} sample={sample} user={this.props.user} createOrder={createOrder} />)
                }
            </ul>
            </div>

        </div>
      )
    }

  }
}

export default SampleIndex