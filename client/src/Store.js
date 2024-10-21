import { createStore } from "redux";

// lets take banking application  now create a store that contains a states values
const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

// Now Lets create a one Reducer function this used for modify the state values

//  this accountReducer is  a Reducer Function its take a two parameters those are first one initialState and action
function accountReducer(state = initialState, action) {
  //    in this we have to write the conditions we can use control statements and switch case also

  if (action.type === "deposite") {
    // this type used for understand what we are doing
    // letes take previous state otherwise we cannot modify it, its look like when we create a an object that obj1={name:"sbhsd",class:2}  if you want to store in other object we create obj2=obj1  but its a referance if you use the spread operator then take the all properties of that object like obj2={...obj1} similarly

    return { ...state, balance: state.balance + +action.payload };
  } else if (action.type === "withdraw") {
    return { ...state, balance: state.balance - +action.payload };
  } else if (action.type === "mobileNumberChange") {
    return { ...state, mobile: action.payload };
  } else if (action.type === "NameChange") {
    return { ...state, fullName: action.payload };
  } else if (action.type === "resert") {
    return initialState;
  }
  // if the above actions are not match then return same state
  else {
    // return {...state};  and also use like this
    return state;
  }
}

// in  redux first install it by using npm install redux

// then import the createStore this is look like stricked because redux have a advanced toolkit is there

//  in this createStore store the function then its return a one object that store in other variable

const store = createStore(accountReducer);
// here we have method call getState used for access the current state

console.log(store.getState());

// if you execute this is not work so we have use in app.js

// by using this variable we can call the dispatch method this automatically call the accountReducer this Reducer Functions

// in this dispatch we have to pass the an object by using this object it can perform the operaion in the Reducer Functions
// its take the type its represent the what kind of operation do  in the Reducer Function and payload this is used for write the data that will change in the Reducer function state valuse based on the type

// store.dispatch({type:"deposite",payload:1000})
// // we can access the state
// console.log(store.getState());

// store.dispatch({type:"withdraw",payload:200})

// console.log(store.getState());

// store.dispatch({type:"mobileNumberChange",payload:324462367})

// console.log(store.getState())

// store.dispatch({type:"NameChange",payload:"Santhosh"})
// console.log(store.getState());

//Now if you want to use this store in other components first export that

export default store;
