export const validJWT = (jwt) => {
  if (jwt) {
    const regex = RegExp("^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$");

    return regex.test(jwt);
  }

  return false;
} 