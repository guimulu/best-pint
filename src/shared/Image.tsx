import { createComponent } from "react-fela";

interface ImageProps {
  src: string;
  alt: string;
  maxHeight: number;
  marginTop: number;
  marginBottom: number;
}

const image = ({ maxHeight, marginTop, marginBottom }: ImageProps) => ({
  maxHeight: `${maxHeight}px`,
  marginTop: `${marginTop}px`,
  marginBottom: `${marginBottom}px`,
  width: "auto",
});

const Image = createComponent(image, "img", ["src", "alt"]);

export default Image;
