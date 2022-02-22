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
        this.props.createRestaurant(restaurant)
        // .then(() => {
        //     this.setState({
        //         restaurantOwnerId: this.props.user.id,
        //         restaurantName: '',
        //         address: ''
        //     })
        // })
        this.props.history.push(`/${this.props.user.id}/restaurants`)
        // <Redirect to={`/${this.props.user.id}/restaurants`}/>
        
    }


    render() {
        return(
            <div className='form-div'>
                <form className='restaurant-form'>
                    <br />
                    <br />
                    <h3>Enter the info for you restaurant below</h3>

                    <label className='textContainer-restaurant'>
                        <label>Name
                            <input type="text" placeholder='The restaurant name' value={this.state.restaurantName} onChange={this.handleChange('restaurantName')}/>
                        </label>
                            <br />
                        <label>Address
                            <input type="text" placeholder='Where is it located?' value={this.state.address} onChange={this.handleChange('address')}/>
                        </label>
                        <br />
                     </label>
                        <br />
                    <button onClick={this.handleSubmit}>Create your restaurant</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </form>
            </div>
        )
    }

}

export default RestaurantForm;