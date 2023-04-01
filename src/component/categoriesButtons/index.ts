import { typeOfCare } from "../../models/ICatalog";
import { IFilterForm } from "../../models/IFilterForm";

export interface CategoriesButtonsProps {
  filterCategories(key: string): void;

  setFilterForm(): React.Dispatch<React.SetStateAction<IFilterForm>>;
}

export interface ICategories {
  value: typeOfCare;
  label: string;
}

export const categories: ICategories[] = [
  {
    value: typeOfCare.body,
    label: "Уход за телом",
  },
  {
    value: typeOfCare.hands,
    label: "Уход за руками",
  },
  {
    value: typeOfCare.legs,
    label: "Уход за ногами",
  },
  {
    value: typeOfCare.face,
    label: "Уход за лицом",
  },
  {
    value: typeOfCare.hair,
    label: "Уход за волосами",
  },
  {
    value: typeOfCare.tanning,
    label: "Средства для загара",
  },
  {
    value: typeOfCare.shaving,
    label: "Средства для бритья",
  },
  {
    value: typeOfCare.set,
    label: "Подарочные наборы",
  },
  {
    value: typeOfCare.hygiene,
    label: "Гигиеническая продукция",
  },
  {
    value: typeOfCare.mouth,
    label: "Гигиена полости рта",
  },
  {
    value: typeOfCare.paper,
    label: "Бумажная продукция",
  },
];