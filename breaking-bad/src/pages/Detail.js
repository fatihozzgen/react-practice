import axios from "axios";
import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Detail() {
  const [char, setChar] = useState(null);
  const { char_id } = useParams();
  const REACT_APP_API_BASE_URL = "https://www.breakingbadapi.com/api";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`${REACT_APP_API_BASE_URL}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} style={{ width: "50%" }} />
        </div>
      )}
    </div>
  );
}

export default Detail;
