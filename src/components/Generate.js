import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

const Generate = () => {
  const [isLoading, setIsLoading] = useState(true);

  let history = useHistory();
  let phrase = window.location.href;
  var arr = phrase.match(/code=(.*)/);
  if (arr != null) {
    var bearer_token = arr[1];
  }
  console.log(bearer_token);

  useEffect(() => {
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
          window.localStorage.setItem("access_token", access_token);
          setIsLoading(false);
          return history.push("/home");
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    generateAccessToken();
  }, [bearer_token, history]);
  return (
    <div className="login__container">
      <div>{isLoading ? <Loading /> : ""}</div>
    </div>
  );
};

export default Generate;
