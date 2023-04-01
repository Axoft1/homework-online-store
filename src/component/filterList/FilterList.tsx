import React, { FC, useContext, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { categories } from "../categoriesButtons/index";
import { Search } from "../Search/Search";
import "./style.scss";
import { IFilterForm } from "../../models/IFilterForm";
import { AContext, CustomContext } from "../../util/context";
import rollingIcon from "../../img/icons/rolling.svg";
import deleteIcon from "../../img/icons/delete.svg";

interface filterProps {
  formSubmit?(e: React.MouseEvent<HTMLDivElement>): void;
  manufacturer?: string[];
  brand?: string[];
  filterForm?: IFilterForm;
  setFilterForm?: React.Dispatch<React.SetStateAction<IFilterForm>>;
  setApplyedFilter?: React.Dispatch<React.SetStateAction<IFilterForm>>;
  applyFilter?: () => void;
}

const FilterList: FC<filterProps> = ({
  manufacturer,
  brand,
  setFilterForm,
  applyFilter,
  setApplyedFilter,
}) => {
  const [rollingBrand, setRollingBrand] = useState(false);
  const [rollingManufacturer, setRollingManufacturer] = useState(false);
  const [valueBrand, setValueBrand] = useState("");
  const [valueManufacturer, setValueManufacturer] = useState("");
  const { setButtonMobileFilter, buttonMobileFilter } =
    useContext<AContext>(CustomContext);

  const inputRefBrand = useRef<HTMLInputElement[]>([]);
  const inputRefManufacturer = useRef<HTMLInputElement[]>([]);
  const inputRefPrice = useRef<HTMLInputElement[]>([]);

  if (!rollingBrand) {
    brand = brand!.filter((e, i) => i < 4);
  }
  if (!rollingManufacturer) {
    manufacturer = manufacturer!.filter((e, i) => i < 4);
  }
  const setMinPrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFilterForm!((prevState) => ({
      ...prevState,
      priceMin: Number.parseInt(value, 10),
    }));
  };

  const setReset = () => {
    console.log(inputRefBrand);

    for (let i = 0; i < inputRefManufacturer.current.length; i++) {
      inputRefManufacturer.current[i].checked = false;
    }
    for (let i = 0; i < inputRefPrice.current.length; i++) {
      inputRefPrice.current[i].value = "";
    }
    for (let i = 0; i < inputRefBrand.current.length; i++) {
      console.log(inputRefBrand.current[i]);

      inputRefBrand.current[i].checked = false;
    }
    setFilterForm!((prevState: IFilterForm) => ({
      ...prevState,
      category: "",
    }));
    setApplyedFilter!(() => ({
      brands: [],
      priceMin: 0,
      priceMax: 10000,
      category: "",
      manufacturers: [],
    }));
  };

  const setMaxPrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFilterForm!((prevState) => ({
      ...prevState,
      priceMax: Number.parseInt(value, 10),
    }));
  };

  const setManufacturer = (evt: boolean, name: string) => {
    if (evt) {
      setFilterForm!((prevState) => ({
        ...prevState,
        manufacturers: [...prevState.manufacturers, name],
      }));
    } else {
      setFilterForm!((prevState) => ({
        ...prevState,
        manufacturers: prevState.manufacturers.filter(
          (m: string) => m !== name
        ),
      }));
    }
  };
  const setBrand = (evt: boolean, name: string) => {
    if (evt) {
      setFilterForm!((prevState) => ({
        ...prevState,
        brands: [...prevState.brands, name],
      }));
    } else {
      setFilterForm!((prevState) => ({
        ...prevState,
        brands: prevState.brands.filter((m: string) => m !== name),
      }));
    }
  };

  const setCategory = (value: string) => {
    setFilterForm!((prevState: IFilterForm) => ({
      ...prevState,
      category: value,
    }));
  };

  const setSearchBrand = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (brand!.includes(valueBrand)) {
      setBrand(true, valueBrand);
      applyFilter!();
    }
  };
  const setSearchManufacturer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (manufacturer!.includes(valueManufacturer)) {
      setManufacturer(true, valueManufacturer);
      applyFilter!();
    }
  };

  return (
    <section className="filterList ">
      <div
        className={
          buttonMobileFilter
            ? "filterList__form filterListDisplay"
            : "filterList__form"
        }
      >
        <h2 className="filterList__form__title">Подбор по параметрам</h2>
        <div className="filterList__form__price">
          <p>Цена &#8376;</p>
          <div className="filterList__form__price-input">
            <input
              ref={(element) => {
                inputRefPrice.current[0] = element as HTMLInputElement;
              }}
              type="number"
              onChange={setMinPrice}
              placeholder="0"
            />
            -
            <input
              ref={(element) => {
                inputRefPrice.current[1] = element as HTMLInputElement;
              }}
              type="number"
              onChange={setMaxPrice}
              placeholder="10 000"
            />
          </div>
        </div>
        <div className="filterList__form__manufacturer">
          <p className="filterList__form__manufacturer_title">Производитель</p>
          <Search
            placeholder="Поиск..."
            formSubmit={setSearchManufacturer}
            setValue={setValueManufacturer}
            value={valueManufacturer}
          />
          <fieldset className="filterList__form__manufacturer_checkbox">
            {manufacturer!.map((e, i) => (
              <div key={i}>
                <input
                  ref={(element) => {
                    inputRefManufacturer.current[i] =
                      element as HTMLInputElement;
                  }}
                  type="checkbox"
                  id={e}
                  name={e}
                  onChange={(evt) => setManufacturer(evt.target.checked, e)}
                />
                <label htmlFor={e}>
                  {e.length >= 20 ? e.slice(0, 20) + " ..." : e}
                </label>
              </div>
            ))}
            <label
              className="filterList__form__manufacturer_rolling"
              onClick={() => setRollingManufacturer(!rollingManufacturer)}
            >
              <p>Показать все</p>
              <img
                src={rollingIcon}
                alt=""
                style={{
                  transform: rollingManufacturer ? "rotate(-180deg)" : "",
                }}
              />
            </label>
          </fieldset>
        </div>
        <span className="filterList__form__span" />
        <div className="filterList__form__manufacturer">
          <p className="filterList__form__manufacturer_title">Бренд</p>
          <Search
            placeholder="Поиск..."
            formSubmit={setSearchBrand}
            setValue={setValueBrand}
            value={valueBrand}
          />
          <fieldset className="filterList__form__manufacturer_checkbox">
            {brand!.map((e, i) => (
              <div key={i}>
                <input
                  ref={(element) => {
                    inputRefBrand.current[i] = element as HTMLInputElement;
                  }}
                  type="checkbox"
                  id={e}
                  name={e}
                  onChange={(evt) => setBrand(evt.target.checked, e)}
                />
                <label htmlFor={e}>
                  {e.length >= 20 ? e.slice(0, 20) + " ..." : e}
                </label>
              </div>
            ))}
            <label
              onClick={() => setRollingBrand(!rollingBrand)}
              className="filterList__form__manufacturer_rolling"
            >
              <p> Показать все</p>
              <img
                src={rollingIcon}
                alt=""
                style={{ transform: rollingBrand ? "rotate(-180deg)" : "" }}
              />
            </label>
          </fieldset>
        </div>
        <div
          className="filterList__form__btns"
          onClick={() => setButtonMobileFilter!(!buttonMobileFilter)}
        >
          <Button size={"b"} onClick={applyFilter}>
            Показать
          </Button>
          <Button onClick={setReset} size={"img"} img={deleteIcon}></Button>
        </div>
      </div>
      <div className="filterList__item">
        <ul>
          {categories.map((e) => (
            <div className="filterList__item-ul" key={e.value}>
              <i
                className="filterList__item-li"
                onClick={() => setCategory(e.value)}
              >
                {e.label}
              </i>
              <span className="filterList__form__span" />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterList;
