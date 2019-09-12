import React from 'react';
import { removeItemAC } from '../actions';
import  { connect } from 'react-redux';

const AddedFeature = props => {

  const removeItem = (e, id) => {
    e.preventDefault();
    props.removeItemAC(id);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* <button onClick ={e => removeItem(e, id)} className="button">X</button> */}
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    features: state.store.id,
    
  };
};

export default connect(
  mapStateToProps,
  { removeItemAC }
)(AddedFeature);
