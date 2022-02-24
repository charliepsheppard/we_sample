import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSamples } from '../actions/sample_actions';
import NavBar from './navbar/navbar';
import SampleIndexItemContainerSearched from './sample_index/searched_items';

class SearchedSamples extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            samples: ''
        }

        this.filterSamples = this.filterSamples.bind(this);
    }

    componentDidMount() {
        this.props.fetchSamples().then(() => this.filterSamples());
    }

    componentDidUpdate(prevProp) {
        console.log(prevProp.match.params.searchQuery)
        if (prevProp.match.params.searchQuery !== this.props.match.params.searchQuery) {
            this.setState(this.filterSamples());
        }
    }

    filterSamples(){
        let filteredSamples;
        if (this.props.match.params.searchQuery.length >= 1) {
            // debugger
            console.log('before', this.props.samples)
            filteredSamples = this.props.samples.filter(sample => {
                return sample.sampleItem.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) 
                    // sample.description.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) 
            })
        }
        this.setState({ samples: filteredSamples })
         console.log('after', this.props.samples)
    }

    render() {
    //   console.log("props from sample index render", this.props.samples)
        if (!this.props.samples) {
        return null;
        } else {
        return (

            <div className='body'>

                <div className='sample-items-container'>
                    <p>test here</p>
                <ul className="sample-items">
                    {
                        this.props.samples.map((sample, idx) => <SampleIndexItemContainerSearched key={idx} sample={sample} />)
                        
                    }
                </ul>
                </div>

            </div>
        )
        }

    }

}

const mapStateToProps = (state, ownProps) => {

    return ({
        samples: Object.values(state.entities.samples),
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchSamples: () => dispatch(fetchSamples()),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchedSamples));
