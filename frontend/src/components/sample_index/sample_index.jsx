import React from 'react'
import SampleIndexItem from './sample_index_item'

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
    console.log("state from sample index", this.props)
  }


//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     })
//   }

  render() {
      console.log("props from sample index render", this.props.samples)
     if (!this.props.samples) {
      return null;
    } else {
      return (
        <div>
          <ul className="sample-items">
              {
                this.props.samples.map(sample => <SampleIndexItem key={sample.id} sample={sample} />)
              }
          </ul>
        </div>
      )
    }

  }
}

export default SampleIndex