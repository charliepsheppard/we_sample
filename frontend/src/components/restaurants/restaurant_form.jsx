import React from 'react';

class RestaurantForm extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    render() {
        return(
            <div>
                <form className='restaurant-form'>

                </form>
            </div>
        )
    }

}

export default RestaurantForm;