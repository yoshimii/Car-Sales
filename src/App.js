import React from 'react';
import { connect } from 'react-redux';
import { removeItemAC, addItemAC } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({additionalPrice, car}) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} addItem={addItemAC} />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total additionalPrice={additionalPrice} removeItem={removeItemAC}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps)(App);
