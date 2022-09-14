export default function useAPIManager() {
  const root = "https://api.tvmaze.com";

  const getShows = (url: string) => {
    return fetch(url)
      .then(handleErrors)
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  const handleErrors = (response: any) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response;
  };

  const getAllShows = () => {
    return getShows(`${root}/shows`);
  };

  const getShowItem = (id: string) => {
    return getShows(`${root}/shows/${id}`);
  };

  const getSearchResult = (inputQuery: string) => {
    return getShows(
      `${root}/search/shows?` + new URLSearchParams({ q: inputQuery })
    );
  };

  return { getAllShows, getShowItem, getSearchResult };
}
