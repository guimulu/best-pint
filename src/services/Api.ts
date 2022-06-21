import { Beer } from "../models/BeerModel";

const BASE_API = "https://api.punkapi.com/v2/beers";

const getAll = async (page: number): Promise<Beer[]> => {
  try {
    const response = await fetch(`${BASE_API}?per_page=20&page=${page}`);
    const data = (await response.json()) as Beer[];
    return data;
  } catch (error) {
    console.error(error);
    alert("Error fetching data");
    return [];
  }
};

const getById = async (id: string): Promise<Beer> => {
  try {
    const response = await fetch(`${BASE_API}/${id}`);
    const data = (await response.json()) as Beer[];
    return data[0];
  } catch (error) {
    console.error(error);
    alert("Error fetching data");
    return {} as Beer;
  }
};

const getFavorites = async (favorites: number[]): Promise<Beer[]> => {
  try {
    const response = await fetch(
      `${BASE_API}?ids=${favorites.toString().replaceAll(",", "|")}`
    );
    const data = (await response.json()) as Beer[];
    return data;
  } catch (error) {
    console.error(error);
    alert("Error fetching data");
    return [];
  }
};

export { getAll, getById, getFavorites };
