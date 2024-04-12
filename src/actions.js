
export const fetchUserData = (username) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: userData });
      } catch (error) {
        dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
      }
    };
  };
  