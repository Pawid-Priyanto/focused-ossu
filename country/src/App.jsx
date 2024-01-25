import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

  // https://studies.cs.helsinki.fi/restcountries/api/name/finland
  // https://studies.cs.helsinki.fi/restcountries/api/

  const onSeacrchCountry = async (e) => {
    console.log(e.target.value, "pposd");
    setCountry(e.target.value);
    try {
      const response = await axios.get(`${baseUrl}/name/${e.target.value}`);
      console.log(response.data, "data resp");
      setData(response.data);
    } catch (err) {
      setError("too many matches, please specify a different filter");
      console.log(err.message, "error");
    }

    // axios
    //   .get(`${baseUrl}/name/${e.target.value}`)
    //   .then((response) => {
    //     console.log(response.data, "data resp");
    //     setData(response.data);
    //   })
    //   .catch((err) => {
    //     setError("to many match, specify to other filter");
    //     console.log(err.message, "error");
    //   });
  };
  return (
    <div>
      <h3>
        find countries{" "}
        <input value={country} onChange={(e) => onSeacrchCountry(e)} />
      </h3>
      <hr />
      {data && (
        <>
          <h3>
            {data.name?.common} {data.flag}
          </h3>
          <h4>
            {data?.capital} {data?.area}
          </h4>
          <h4>{data.languages?.ara}</h4>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
