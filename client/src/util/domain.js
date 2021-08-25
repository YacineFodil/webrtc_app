export default process.env.NODE_ENV === "development"
  ? "http://localhost:5003"
  : process.env.NODE_ENV === "production" &&
  "https://testwebrtcbackend1.herokuapp.com";
