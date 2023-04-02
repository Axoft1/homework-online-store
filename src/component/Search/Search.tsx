import * as imgs from "../../img/imges";
import React, { FC } from "react";
import "./style.scss";

interface filterProps {
  setValue(e: string): void;
  value: string;
  formSubmit(e: React.FormEvent): void;
  img?: string;
  placeholder?: string;
}

export const Search: FC<filterProps> = ({
  setValue,
  formSubmit,
  value,
  img,
  placeholder,
}): JSX.Element => {
  return (
    <form onSubmit={(e) => formSubmit(e)} className="search">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      <button className="search_img">
        {img ? <img src={img} alt="" /> : <img src={imgs.search} alt="" />}
      </button>
    </form>
  );
};
