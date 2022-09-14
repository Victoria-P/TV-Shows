export default function useAPIManager() {
  const handleErrors = (response: any) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response;
  };

  const getShows = () => {
    return fetch("https://api.tvmaze.com/shows")
      .then(handleErrors)
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  const getShowItem = (id: string) => {
    return fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(handleErrors)
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  const getSearchResult = (inputQuery: string) => {
    return fetch(
      "https://api.tvmaze.com/search/shows?" +
        new URLSearchParams({ q: inputQuery })
    )
      .then(handleErrors)
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  return { getShows, getShowItem, getSearchResult };
}
