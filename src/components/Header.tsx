import React, { useContext } from "react";
import { useFela } from "react-fela";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Text, transition } from "../shared";

const headerStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "#0E1428",
  padding: "16px 24px",
  "@media (min-width: 1024px)": {
    padding: "24px 80px",
  },
  position: "sticky",
  top: 0,
  zIndex: 1,
});

const Header = () => {
  const { css } = useFela();
  const navigate = useNavigate();
  const { favorites } = useContext(AppContext);
  const hasFavorites = favorites.length > 0;
  return (
    <div className={css(headerStyle)}>
      <Text
        extend={{
          "@media (max-width: 1024px)": {
            fontSize: "24px",
          },
          "&:hover": { transform: "scale(1.2)", cursor: "pointer" },
          transition,
        }}
        fontSize={40}
        bold
        onClick={() => navigate("/")}
      >
        Best Pint
      </Text>
      <div className={css({ display: "flex", flexDirection: "row" })}>
        <Text
          extend={{
            "@media (max-width: 1024px)": {
              fontSize: "16px",
            },
            "&:hover": { transform: "scale(1.1)", cursor: "pointer" },
            transition,
          }}
          fontSize={24}
          bold
          onClick={() => navigate("/random")}
        >
          Random
        </Text>
        <Text
          extend={{
            "@media (max-width: 1024px)": {
              fontSize: "14px",
            },
          }}
          fontSize={20}
          bold
        >
          |
        </Text>
        <Text
          extend={{
            "@media (max-width: 1024px)": {
              fontSize: "16px",
            },
            "&:hover": { transform: "scale(1.1)", cursor: "pointer" },
            transition,
          }}
          fontSize={24}
          bold
          onClick={() => hasFavorites && navigate("/favorites")}
        >
          Favorites {hasFavorites && `(${favorites.length})`}
        </Text>
      </div>
    </div>
  );
};

export default Header;
