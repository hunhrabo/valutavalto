const url = "/api.napiarfolyam.hu.xml";
// const externalUrl = "http://api.napiarfolyam.hu?bank=mnb";

const getData = () => {
  const request = fetch(url)
    .then(response => response.text())
    .then(response =>
      new window.DOMParser().parseFromString(response, "text/xml")
    )
    .then(response => {
      let items = response.getElementsByTagName("item");
      return Array.from(items);
    });
  return request;
};

export default getData;
