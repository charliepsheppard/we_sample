import React from 'react';

class SampleForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sampleItem: '',
            description: '',
            price: '',
            restaurantId: this.props.restaurantId,

    
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleSubmit(e) {
        // e.preventDefault();
        const sample = Object.assign({}, this.state)
        this.props.createSample(sample).then(this.props.closeModal);
    }

    render() {
        return(
            <div className="modal-box">
                <form>
                    <h3>Enter the info for your sample below</h3>
                
                    <label className='textContainer-box'>
                        <label>Name
                            <input type="text" placeholder='The sample name' value={this.state.sampleItem} onChange={this.handleChange('sampleItem')}/>
                        </label>
                        <br />
                    <label>Description
                        <input type="text" placeholder='Sample description?' value={this.state.description} onChange={this.handleChange('description')}/>
                    </label>
                        <br />

                    <label>Price
                        <input type="text" placeholder='In dollars' value={this.state.price} onChange={this.handleChange('price')}/>
                    </label>
                        <br />
                </label>
                        <br />
                    <button onClick={this.handleSubmit}>Create your sample</button>
                
                </form>
            </div>
        )
    }

}

export default SampleForm;