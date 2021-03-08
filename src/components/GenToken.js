import axios from "axios";
import { Link } from "react-router-dom";

// const genAccessToken = async () => {
//   try {
//     let phrase = window.location.href;
//     let arr = phrase.match(/code=(.*)/);
//     if (arr != null) {
//       var bearer_token = arr[1];
//     }
//     const response = await axios.get("http://localhost:5000/token", {
//       headers: {
//         Authorization: "Bearer " + bearer_token,
//       },
//     });
//     let access_token = response.data.access_token;

//     window.localStorage.setItem("access_token", access_token);
//   } catch (err) {
//     console.log(err);
//   }
// };

const GenToken = () => {
  let phrase = window.location.href;
  let arr = phrase.match(/code=(.*)/);
  if (arr != null) {
    var bearer_token = arr[1];
  }
  console.log("bearer: " + bearer_token);
  const headers = {
    method: "GET",
    url: "http://localhost:5000/token",
    headers: {
      Authorization: "Bearer " + bearer_token,
    },
  };

  const generateAccessToken = () => {
    axios
      .request(headers)
      .then(function (response) {
        let access_token = response.data.access_token;
        // if (localStorage.access_token) {
        //   localStorage.removeItem("access_token");
        // } else {
        //   localStorage.setItem("access_token", access_token);
        // }
        localStorage.setItem("access_token", access_token);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
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

export default GenToken;
