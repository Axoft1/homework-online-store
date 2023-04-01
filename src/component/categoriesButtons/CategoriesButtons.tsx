import React, { FC } from "react";
import { categories } from ".";
import { IFilterForm } from "../../models/IFilterForm";
import { ButtonCategories } from "../ButtonCategories/ButtonCategories";


interface CategoriesButtonsProps {

  setFilterForm: React.Dispatch<React.SetStateAction<IFilterForm>>;
}

const CategoriesButtons: FC<CategoriesButtonsProps> = ({
  setFilterForm,
}) => {

  const setCategory = (value: string) => {
    setFilterForm((prevState: IFilterForm) => ({
      ...prevState,
      category: value,
    }));
  };

  return (
    <>
      {categories.map((e) => (
        <ButtonCategories onClick={() => setCategory(e.value)} key={e.value}>
          {e.label}
        </ButtonCategories>
      ))}
    </>
  );
};

export default CategoriesButtons;
