import React from 'react';
import { connect } from 'react-redux';
import { removeItemAC, addItemAC } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  // const removeItemAC = (id) => {
  //   dispatch({ type: "REMOVE_ITEM", payload: id});
  // };

  // const buyItem = item => {
  //   dispatch({ type: "REMOVE_ITEM", payload: id});
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} addItem={addItemAC} />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total additionalPrice={state.additionalPrice} removeItem={removeItemAC}/>
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

export default connect(mapStateToProps, { removeItemAC })(App);
