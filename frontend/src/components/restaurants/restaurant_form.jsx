import React from 'react';

class RestaurantForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurantOwnerId: this.props.user.id,
            restaurantName: '',
            address: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

     handleSubmit(e) {
        e.preventDefault()
        const restaurant = Object.assign({}, this.state)
        this.props.createRestaurant(restaurant).then(() => {
            this.setState({
                restaurantOwnerId: this.props.user.id,
                restaurantName: '',
                address: ''
            })
        })
        
    }


    render() {
        return(
            <div>
                <form className='restaurant-form'>
                    <h3>Enter the info for you restaurant Below</h3>

                    <label className='textContainer'>
                    <label>Name
                        <input type="text" placeholder='What is the name of your restaurant?' value={this.state.restaurantName} onChange={this.handleChange('name')}/>
                    </label>

                    <label>Address
                        <input type="text" placeholder='Where is your restaurant located?' value={this.state.address} onChange={this.handleChange('address')}/>
                    </label>

                </label>
                    <button onClick={this.handleSubmit}>Submit your review</button>
                </form>
            </div>
        )
    }

}

export default RestaurantForm;