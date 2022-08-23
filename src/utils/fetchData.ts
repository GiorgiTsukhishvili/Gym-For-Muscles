interface Fetch {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

export const exerciseOptions: Fetch = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY!,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: Fetch) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
