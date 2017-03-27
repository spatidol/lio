import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AllLios extends Component {

  componentDidMount () {
    // this.props.onLoadPuppies();
  }

  render () {
    return (
      <div className="m-t-3">
       <div className="brunch-grid">
          <div className="white-nav"></div>
          {
            this.props.lios.map(lio => {
              return (
                <ul key={lio.id} className="list-unstyled">
                  <li className="corner">
                    <Link className="name-bottom" to={`brunchplace/${lio.place_id}`}> { lio.name }</Link>
                  </li>
                </ul>
              )
            })
          }
        </div>
      </div>
    );
  }
}
