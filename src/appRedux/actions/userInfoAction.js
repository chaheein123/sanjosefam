const login = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  }
};

export {
  login
};
