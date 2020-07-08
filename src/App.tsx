import React, { useEffect, useState } from "react";
import { getAPOD } from "./Api";

function App() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getApiRequests();
  }, []);

  const getApiRequests = async () => {
    setLoading(true);
    try {
      const apod = await getAPOD();
      setImageUrl(apod.data.url);
    } catch (error) {
      setError("Erro ao baixar da API DA NASA");
    }
    setLoading(false);
  };

  return (
    <div
      className="App"
      style={{ textAlign: "center", marginTop: "5rem", fontSize: "3rem" }}
    >
      This is my very usefull app, wow oh my god.
      <br />
      {process.env.REACT_APP_URL || "Nao carregou REACT_APP_URL"}
      <br />
      {process.env.REACT_APP_API_URL || "Nao carregou REACT_APP_API_URL"}
      <br />
      {process.env.REACT_APP_USER || "Nao carregou REACT_APP_USER"}
      <br />
      {loading ? (
        <div>Loading</div>
      ) : (
        <img src={imageUrl} alt="foto astronomica" />
      )}
      {error && <div>Error Message: {error}</div>}
    </div>
  );
}

export default App;
