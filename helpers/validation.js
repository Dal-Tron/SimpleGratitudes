export const validJWT = (jwt = "") => {
  if (jwt) {
    const regex = RegExp("^[a-zA-Z0-9-_]+.[a-zA-Z0-9-_]+.[a-zA-Z0-9-_]+$");
    return regex.test(jwt);
  }

  return false;
};

export const validPassword = (password = "") => {
  if (password) {
    const regex = RegExp(
      "^(?=.{8,40}$)[A-Za-z0-9.!$&*#@]+(?:[A-Za-z0-9.!$&*#@]+)*$"
    );
    return regex.test(password);
  }

  return false;
};

export const validUsername = (username = "") => {
  if (username) {
    const regex = RegExp(
      "^(?=.{3,40}$)[A-Za-z0-9.!$&*#@_]+(?:[A-Za-z0-9.!$&*#@_]+)*$"
    );
    return regex.test(username);
  }

  return false;
};

export const validEmail = (email) => {
  if (email) {
    const regex = RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );
    return regex.test(email);
  }

  return false;
};
