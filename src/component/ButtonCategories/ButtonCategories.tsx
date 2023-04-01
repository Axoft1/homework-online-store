import React from "react";
import { ButtonProps } from "./Button.props";
import "./style.scss";



export const ButtonCategories= ({onClick, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className="buttonFilter">
      {<p className="buttonFilter__text">{children}</p>}
    </button>
  );
};
