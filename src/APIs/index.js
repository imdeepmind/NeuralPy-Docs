import Axios from "axios";

Axios.defaults.baseURL =
  "https://raw.githubusercontent.com/imdeepmind/NeuralPy/master/docs/";
Axios.defaults.timeout = 1000;

Axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log("Network Error: ", error);
    return Promise.reject(error);
  }
);

export const LoadContentsAPI = async () => {
  try {
    return await Axios.get("contents.json");
  } catch (error) {
    throw new Error("Can not load the contents list");
  }
};

export const LoadDocsAPI = async (url) => {
  try {
    return await Axios.get(url);
  } catch (error) {
    throw new Error("Can not load the documentation");
  }
};
