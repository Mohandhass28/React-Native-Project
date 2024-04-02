import { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "f06dd9b5e6msh62683bdf742e840p15249ajsnadb3a39bec62",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchdata = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      Alert("Error fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const refreshData = () => {
    setLoading(true);
    fetchdata();
  };
  return { data, loading, error, refreshData };
};

export default useFetch;
