import React, { FC, useContext, useState } from "react";
import { AContext, CustomContext } from "../../util/context";
import { categories } from "../categoriesButtons/index";
import { IFilterForm } from "../../models/IFilterForm";
import InputChecked from "./InputChecked";
import { Search } from "../Search/Search";
import { Button } from "../Button/Button";
import * as img from "../../img/imges";
import InputPrice from "./InputPrice";
import "./style.scss";

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
  const [resetRef, setResetRef] = useState(false);
  const [rollingManufacturer, setRollingManufacturer] = useState(false);
  const [valueBrand, setValueBrand] = useState("");
  const [valueManufacturer, setValueManufacturer] = useState("");
  const { setButtonMobileFilter, buttonMobileFilter } =
    useContext<AContext>(CustomContext);

  if (!rollingBrand) {
    brand = brand && brand.filter((e, i): boolean => i < 4);
  }
  if (!rollingManufacturer) {
    manufacturer = manufacturer && manufacturer.filter((e, i): boolean => i < 4);
  }

  const setMinPrice = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = evt.target;
    setFilterForm &&
      setFilterForm((prevState) => ({
        ...prevState,
        priceMin: Number.parseInt(value, 10),
      }));
  };

  const setReset = (): void => {
    setResetRef(!resetRef);
    setFilterForm &&
      setFilterForm((prevState: IFilterForm) => ({
        ...prevState,
        category: "",
      }));
    setApplyedFilter &&
      setApplyedFilter(() => ({
        brands: [],
        priceMin: 0,
        priceMax: 10000,
        category: "",
        manufacturers: [],
      }));
  };

  const setMaxPrice = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = evt.target;
    setFilterForm &&
      setFilterForm((prevState) => ({
        ...prevState,
        priceMax: Number.parseInt(value, 10),
      }));
  };

  const setManufacturer = (evt: boolean, name: string): void => {
    if (evt) {
      setFilterForm &&
        setFilterForm((prevState: IFilterForm) => ({
          ...prevState,
          manufacturers: [...prevState.manufacturers, name],
        }));
    } else {
      setFilterForm &&
        setFilterForm((prevState: IFilterForm) => ({
          ...prevState,
          manufacturers: prevState.manufacturers.filter(
            (m: string): boolean => m !== name
          ),
        }));
    }
  };
  const setBrand = (evt: boolean, name: string): void => {
    if (evt) {
      setFilterForm &&
        setFilterForm((prevState: IFilterForm) => ({
          ...prevState,
          brands: [...prevState.brands, name],
        }));
    } else {
      setFilterForm &&
        setFilterForm((prevState: IFilterForm) => ({
          ...prevState,
          brands: prevState.brands.filter((m: string): boolean => m !== name),
        }));
    }
  };

  const setCategory = (value: string): void => {
    setFilterForm &&
      setFilterForm((prevState: IFilterForm) => ({
        ...prevState,
        category: value,
      }));
  };

  const setSearchBrand = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (brand && brand.includes(valueBrand)) {
      setBrand(true, valueBrand);
      applyFilter!();
    }
  };
  const setSearchManufacturer = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (manufacturer && manufacturer.includes(valueManufacturer)) {
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
            <InputPrice
              onChange={setMinPrice}
              resetRef={resetRef}
              placeholder="0"
            />
            -
            <InputPrice
              onChange={setMaxPrice}
              resetRef={resetRef}
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
            {manufacturer &&
              manufacturer.map((e, i) => (
                <InputChecked
                  key={e}
                  name={e}
                  setFilter={setManufacturer}
                  resetRef={resetRef}
                />
              ))}
            <label
              onClick={(): void => setRollingManufacturer(!rollingManufacturer)}
              className="filterList__form__manufacturer_rolling"
            >
              <p>Показать все</p>
              <img
                src={img.rollingIcon}
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
            {brand &&
              brand.map((e, i) => (
                <InputChecked
                  key={e}
                  name={e}
                  setFilter={setBrand}
                  resetRef={resetRef}
                />
              ))}
            <label
              onClick={(): void => setRollingBrand(!rollingBrand)}
              className="filterList__form__manufacturer_rolling"
            >
              <p> Показать все</p>
              <img
                src={img.rollingIcon}
                alt=""
                style={{ transform: rollingBrand ? "rotate(-180deg)" : "" }}
              />
            </label>
          </fieldset>
        </div>
        <div
          className="filterList__form__btns"
          onClick={(): void => setButtonMobileFilter!(!buttonMobileFilter)}
        >
          <Button size={"b"} onClick={applyFilter}>
            Показать
          </Button>
          <Button onClick={setReset} size={"img"} img={img.deleteIcon}></Button>
        </div>
      </div>
      <div className="filterList__item">
        <ul>
          {categories.map((e, i) => (
            <div className="filterList__item-ul" key={i}>
              <i
                className="filterList__item-li"
                onClick={(): void => setCategory(e.value[0])}
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
