import React, {  FC  } from "react";
import Select, {  SingleValue } from "react-select";
import { IOption } from ".";
import "./style.scss"

const DropDownList: FC<any> = ({ catalogSort }) => {
  const options: IOption[] = [
    { value: "nameAZ", label: "названиe А-Я" },
    { value: "nameZA", label: "названиe Я-А" },
    { value: "price01", label: "по цене 1-10" },
    { value: "price10", label: "по цене 10-1" },
  ];
  
  const onChange = (newValue: SingleValue<IOption>): void => {
 
    catalogSort(newValue?.value);
  };

  return (
    <div className="dropDownList">
      <p>Сортировка:</p>
      <Select
        className="react-select"
        classNamePrefix="react-select"
        onChange={onChange}
        isSearchable={false}
        options={options}
        defaultValue={options[0]}
      />
    </div>
  );
};

export default DropDownList;
