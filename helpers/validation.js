export const validJWT = (jwt = '') => {
  if (jwt) {
    const regex = RegExp("^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$");

    return regex.test(jwt);
  }

  return false;
}

export const validPassword = (password = '') => {
  if (password) {
    const regex = RegExp("^[a-zA-Z0-9.!#$%^&*@]{8,40}");
    return regex.test(password);
  }

  return false;
}

export const validUsername = (username = '') => {
  if (username) {
    const regex = RegExp("^[a-zA-Z0-9.!$&*#@]{3,40}");
    return regex.test(username);
  }

  return false;
}