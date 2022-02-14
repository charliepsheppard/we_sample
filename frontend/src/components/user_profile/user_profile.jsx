import React from 'react';
import OrderContainer from '../orders/order_container';
import ReviewIndexContainer from '../reviews/review_index_container'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return (
      <div>
        <div>
        <OrderContainer />
        </div>

        <div>
          <ReviewIndexContainer />
        </div>

      </div>
    )
  }
}

export default UserProfile;