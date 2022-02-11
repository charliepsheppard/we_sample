import React from 'react';

class OrderForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            order: {
                sample: '',
                userId: this.props.user.id,
                restaurantId: this.props.restaurant._id,
            

            },
            errors: {}
        }
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId),
        this.props.fetchSamplesFromRestaurant(this.props.match.params.restaurantId)
    }

    




}

