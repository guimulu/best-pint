import React, { useContext } from "react";
import { useFela } from "react-fela";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Beer } from "../models/BeerModel";
import { Abv, Favorite, Image, Text, transition } from "../shared";

interface CardProps {
  beer: Beer;
}

const cardStyle = () => ({
  position: "relative",
  backgroundColor: "#0E1428",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "280px",
  "@media (max-width: 640px)": {
    maxWidth: "400px",
  },
  margin: "24px 16px 16px 16px",
  padding: "16px",
  boxShadow: "#6C8EAD 0px 0px 8px 4px;",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.03)",
  },
  transition,
});

const Card = ({ beer }: CardProps) => {
  const { css } = useFela();
  const navigate = useNavigate();
  const { favorites, handleFavorite } = useContext(AppContext);
  return (
    <div
      id={`${beer.id}`}
      className={css(cardStyle)}
      onClick={() => navigate(`/${beer.id}`)}
    >
      <Abv abv={beer.abv}></Abv>
      <Favorite
        isFavorite={favorites.includes(beer.id)}
        onClick={(e) => {
          handleFavorite(beer.id);
          e.stopPropagation();
        }}
      />
      <Image
        alt={beer.name}
        src={beer.image_url}
        maxHeight={150}
        marginTop={32}
        marginBottom={32}
      />
      <Text fontSize={24} textAlign={"center"} bold>
        {beer.name}
      </Text>
      <Text fontSize={16}>{beer.tagline}</Text>
    </div>
  );
};

export default Card;
