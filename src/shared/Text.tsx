import { createComponent } from "react-fela";

interface TextProps {
  fontSize: number;
  textAlign?: "left" | "center" | "right";
  bold?: boolean;
  color?: string;
  marginBottom?: number;
}

const text = ({
  fontSize,
  textAlign = "left",
  bold,
  color = "#6c8ead",
  marginBottom = 0,
}: TextProps) => ({
  fontSize: `${fontSize}px`,
  color: color,
  textAlign: textAlign,
  fontWeight: bold ? "bold" : "normal",
  padding: "4px",
  marginBottom: `${marginBottom}px`,
});

const Text = createComponent(text, "div", ["onClick"]);

export default Text;
