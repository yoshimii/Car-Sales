import React from 'react';
import { removeItemAC } from '../actions';
import  { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={e => {e.preventDefault(); props.removeItemAC(props.feature)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    features: state.store,    
  };
};

export default connect(
  mapStateToProps,
  { removeItemAC }
)(AddedFeature);
