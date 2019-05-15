import axios from "axios";
const baseUrl = "/api/get";

const getAll = () => {
  const request = axios.get(baseUrl, {
    headers: {
      "content-type": "text/xml"
    }
  });

  return request
    .then(response => response.data)
    .then(response =>
      new window.DOMParser().parseFromString(response, "text/xml")
    )
    .then(response => {
      let items = response.getElementsByTagName("item");
      return Array.from(items);
    });
};

export default getAll;
