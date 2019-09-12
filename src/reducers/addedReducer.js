// import actions here

const initialState = {
    car: {
        price: 26390,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      }
}

export const addedReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}