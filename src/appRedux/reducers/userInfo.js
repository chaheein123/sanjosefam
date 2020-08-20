const userInfoReducer = (
  state = {
    nameid: null,
    unique_name: null,
  },
  action
) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        nameid: action.payload.nameid,
        unique_name: action.payload.unique_name
      };
    default:
      return null;
  }
};

export default userInfoReducer;
