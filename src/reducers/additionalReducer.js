// import actions here

const initialState = {
    additionalPrice: 0,
    store: [
        { id: 1, name: 'V-8 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
}

export const additionalReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}