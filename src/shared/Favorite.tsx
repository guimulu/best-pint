import { createComponent } from "react-fela";

import transition from "./Transition";

interface FavoriteProps {
  isFavorite?: boolean;
}

const favorite = ({ isFavorite }: FavoriteProps) => ({
  position: "absolute",
  right: "16px",
  top: "0",
  fontSize: "40px",
  color: isFavorite ? "#ed4f4f" : "#ededed",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.2)",
  },
  transition,
  "::before": {
    content: '"♥"',
  },
});

const Favorite = createComponent(favorite, "div", ["onClick"]);

export default Favorite;
