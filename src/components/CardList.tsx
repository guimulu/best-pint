import React, { forwardRef, PropsWithChildren } from "react";
import { useFela } from "react-fela";

const cardList = () => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  margin: "auto 8px",
  "@media (min-width: 1400px)": {
    margin: "auto 8%",
  },
});

const CardList = forwardRef<HTMLDivElement, PropsWithChildren>((props, ref) => {
  const { css } = useFela();
  return (
    <div className={css(cardList)} ref={ref}>
      {props.children}
    </div>
  );
});

export default CardList;
