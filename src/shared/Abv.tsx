import { createComponent } from "react-fela";

interface AbvProps {
  abv: number;
}

const getAbvColor = (abv: number) => {
  if (abv < 4.5) {
    return "#21ab64";
  }
  if (abv < 6) {
    return "#e6cf01";
  }
  return "#d3603a";
};

const abv = ({ abv }: AbvProps) => ({
  backgroundColor: getAbvColor(abv),
  padding: "8px",
  position: "absolute",
  left: "0",
  top: "0",
  borderTopLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  color: "#fff",
  "::before": {
    content: `"ABV: ${abv}"`,
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const Abv = createComponent(abv, "div");

export default Abv;
