module.exports = {
  target: process.env.DEV === "development" ? "server" : "serverless"
};
