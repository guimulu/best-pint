import { createComponent } from "react-fela";

interface IbuProps {
  ibu: number;
}

const getIbuColor = (ibu: number) => {
  if (ibu < 15) {
    return "#21ab64";
  }
  if (ibu < 30) {
    return "#e6cf01";
  }
  return "#d3603a";
};

const ibu = ({ ibu }: IbuProps) => ({
  backgroundColor: getIbuColor(ibu),
  padding: "8px",
  position: "absolute",
  left: "0",
  top: "36px",
  borderTopLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  color: "#fff",
  "::before": {
    content: `"IBU: ${ibu}"`,
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const Ibu = createComponent(ibu, "div");

export default Ibu;
