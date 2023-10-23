  // reducers.js
  const initialState = {
    user: null,
    isLoggedIn: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        // Handle registration and store user data in the state
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case 'LOGIN_USER':
        // Handle login and store user data in the state
        // return {
        //   ...state,
        //   user: action.payload,
        //   isLoggedIn: true,
        // };
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case 'LOGOUT_USER':
        // Handle logout and clear user data from the state
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };

  export default userReducer;
  
  
  