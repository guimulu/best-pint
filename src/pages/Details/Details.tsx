import React, { useCallback, useContext, useEffect, useState } from "react";
import { useFela } from "react-fela";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Beer } from "../../models/BeerModel";
import { getById } from "../../services/Api";
import { Abv, Favorite, Ibu, Image, Text, Ebc } from "../../shared";

const Details = () => {
  const { css } = useFela();
  const { id } = useParams();
  const { favorites, handleFavorite } = useContext(AppContext);
  const [beer, setBeer] = useState<Beer>();

  const getBeer = useCallback(async () => {
    if (id) {
      const data = await getById(id);
      setBeer(data);
    }
  }, [id]);

  useEffect(() => {
    getBeer();
  }, [getBeer]);

  const contentStyle = () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    margin: "40px",
    paddingTop: "40px",
    paddingBottom: "40px",
    position: "relative",
    backgroundColor: "#0E1428",
    borderRadius: "8px",
    boxShadow: "#6C8EAD 0px 0px 8px 4px;",
  });

  const left = () => ({
    padding: "16px",
  });
  const right = () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "500px",
    padding: "16px",
  });

  return (
    <>
      {beer && (
        <div className={css(contentStyle)}>
          <Favorite
            isFavorite={favorites.includes(beer.id)}
            onClick={(e) => {
              handleFavorite(beer.id);
              e.stopPropagation();
            }}
          />
          <div className={css(left)}>
            <Abv abv={beer.abv}></Abv>
            {beer.ibu && <Ibu ibu={beer.ibu}></Ibu>}
            {beer.ebc && <Ebc ebc={beer.ebc}></Ebc>}
            <Image
              alt={beer?.name || "Beer Image"}
              src={beer?.image_url || ""}
              maxHeight={450}
              marginTop={32}
              marginBottom={32}
            />
          </div>
          <div className={css(right)}>
            <Text fontSize={40} bold marginBottom={8}>
              {beer?.name} ({beer.first_brewed})
            </Text>
            <Text fontSize={24} bold marginBottom={16}>
              {beer?.tagline}
            </Text>
            <Text fontSize={18} marginBottom={8}>
              About:
            </Text>
            <Text fontSize={16} marginBottom={16}>
              {beer?.description}
            </Text>
            {beer?.food_pairing && (
              <>
                <Text fontSize={18} marginBottom={8}>
                  Food Pairing:{" "}
                </Text>
                <Text fontSize={16} marginBottom={16}>
                  {beer?.food_pairing.join("  |  ")}
                </Text>
              </>
            )}
            {beer?.brewers_tips && (
              <>
                <Text fontSize={18} marginBottom={8}>
                  Brewers Tips:
                </Text>
                <Text fontSize={16} marginBottom={16}>
                  {beer?.brewers_tips}
                </Text>
              </>
            )}
            {beer.ingredients && (
              <>
                <Text fontSize={18} marginBottom={8}>
                  Ingredients:
                </Text>

                {beer.ingredients.malt.map((malt) => (
                  <Text key={malt.name} fontSize={16}>
                    {malt.name}
                  </Text>
                ))}
                {beer.ingredients.hops.map((hop) => (
                  <Text key={hop.name} fontSize={16}>
                    {hop.name}
                  </Text>
                ))}
                <Text fontSize={16}>{beer.ingredients.yeast}</Text>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
