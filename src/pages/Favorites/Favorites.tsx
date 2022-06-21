import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Beer } from "../../models/BeerModel";
import { getFavorites } from "../../services/Api";
import { CardList, Card } from "../../components";

const Favorites = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const { favorites } = useContext(AppContext);

  const getBeers = useCallback(async () => {
    const data = await getFavorites(favorites);
    setBeers(data);
  }, [favorites]);

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  return (
    <CardList>
      {beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
      ))}
    </CardList>
  );
};

export default Favorites;
