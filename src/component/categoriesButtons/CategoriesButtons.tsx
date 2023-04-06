import React, { FC } from "react";
import { categories } from ".";
import { IFilterForm } from "../../models/IFilterForm";
import { ButtonCategories } from "../ButtonCategories/ButtonCategories";

interface CategoriesButtonsProps {
  setFilterForm: React.Dispatch<React.SetStateAction<IFilterForm>>;
}

const CategoriesButtons: FC<CategoriesButtonsProps> = ({ setFilterForm }) => {
  const setCategory = (value: string): void => {
    setFilterForm((prevState: IFilterForm) => ({
      ...prevState,
      category: value,
    }));
  };

  return (
    <>
      {categories.map((e) => (
        <ButtonCategories
          onClick={(): void => setCategory(e.value[0])}
          key={e.value[0]}
        >
          {e.label}
        </ButtonCategories>
      ))}
    </>
  );
};

export default CategoriesButtons;
