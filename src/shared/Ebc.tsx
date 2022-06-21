import { createComponent } from "react-fela";

interface EbcProps {
  ebc: number;
}

const getEbcColor = (ebc: number) => {
  if (ebc < 10) {
    return "#21ab64";
  }
  if (ebc < 50) {
    return "#e6cf01";
  }
  return "#d3603a";
};

const ebc = ({ ebc }: EbcProps) => ({
  backgroundColor: getEbcColor(ebc),
  padding: "8px",
  position: "absolute",
  left: "0",
  top: "72px",
  borderTopLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  color: "#fff",
  "::before": {
    content: `"EBC: ${ebc}°"`,
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const Ebc = createComponent(ebc, "div");

export default Ebc;
