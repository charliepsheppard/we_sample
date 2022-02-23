import React from 'react';
import OrderContainer from '../orders/order_container';
import ReviewIndexContainer from '../reviews/review_index_container'
import {Link} from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidUpdate() {
  //   this.props.history.push(`/users/${this.props.user.id}`)
  // }

  
  render() {
    // console.log('props in user prof', this.props)

    return (
      <div className='outer-profile'>
        <div className='users-buttons-container'>
          <Link to="/restaurants"><button>View Restaurants </button></Link>
          <br />
          <br />
          <div className="link">
            <Link to={'/new_restaurant'}><button>Create your Restaurant's profile</button></Link>
          </div>
          <br />
          <div className="link">
          <Link to={`/${this.props.user.id}/restaurants`}><button>Your Restaurants</button></Link>
          <br /></div>
          <div >
            <br />
            {/* <p>Your Profile</p> */}
          </div>
          
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