import React, { Component } from 'react';

export default class SingleLio extends Component {

  componentWillMount () {

  }

  render () {


    return (
      <div className="clearfix">
      <div className="white-nav2"></div>
        <div className="info">
          <h6>{ this.props.lio.name }</h6>
        </div>

      </div>
    )
  }
}
