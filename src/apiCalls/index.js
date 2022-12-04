export const getAllMovies = async () => {
  const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Couldn't get data from the server");
  }
  return response.json();
};

export const getSelectedMovie = async (id) => {
  const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Couldn't get data from the server");
  }
  return response.json();
};
