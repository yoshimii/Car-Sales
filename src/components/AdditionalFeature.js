import React from 'react';
import { connect } from 'react-redux';
import { addItemAC } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={e => {e.preventDefault(); props.addItemAC(props.feature)}} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  };
};

export default connect(
  mapStateToProps,
  { addItemAC }
)(AdditionalFeature);
