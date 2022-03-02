import React from 'react';
import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = state => {
  return {
    user: state.entities.user
  }
}

export default connect(mapStateToProps, null)(SplashPage);