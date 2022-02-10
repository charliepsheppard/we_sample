import React from 'react';

class SampleIndexItem extends React.Component {
  render() {
    return (
        <div>

            <p>{this.props.sample.sampleItem}</p>
            <p>{this.props.sample.description}</p>
        </div>
    )
  };
}

export default SampleIndexItem;