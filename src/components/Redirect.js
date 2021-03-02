import axios from "axios";
import { Link } from "react-router-dom";

let phrase = window.location.href;
var arr = phrase.match(/code=(.*)/);
if (arr != null) {
  var bearer_token = arr[1];
  console.log(bearer_token);
}

const headers = {
  method: "GET",
  url: "http://localhost:3000/token",
  headers: {
    Authorization: "Bearer " + bearer_token,
  },
};

const generateAccessToken = () => {
  axios
    .request(headers)
    .then(function (response) {
      let access_token = response.data.access_token;
      window.localStorage.setItem("access_token", access_token);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const Redirect = () => {
  return (
    <div className="login__container">
      <p className="lead">Generating Access Token</p>
      <Link to="/home">
        <button className="redirect__btn" onClick={() => generateAccessToken()}>
          Redirect to homepage
        </button>
      </Link>
    </div>
  );
};

export default Redirect;
