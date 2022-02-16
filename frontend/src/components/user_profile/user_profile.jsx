import React from 'react';
import OrderContainer from '../orders/order_container';
import ReviewIndexContainer from '../reviews/review_index_container'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidUpdate() {
  //   this.props.history.push(`/users/${this.props.user.id}`)
  // }

  
  render() {
    console.log('props in user profile', this.props)

 
    return (
      <div className='outer-profile'>
        <div className='users-buttons-container'>
          <button>Create Restaurant</button>
          <button>View Restaurants</button>
          <div>
            <p>Your Profile</p>
          </div>
          <button>Your Restaurant</button>
        </div>


        <div className='users-orders-container'>
        <OrderContainer />
        </div>

        <div className='users-reviews-container'>
          <ReviewIndexContainer propsObj={this.props}/>
        </div>

      </div>
    )
  }
}

export default UserProfile;