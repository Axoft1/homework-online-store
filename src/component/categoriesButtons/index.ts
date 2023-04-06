// import { CareCategories, typeOfCare } from "../../models/ICatalog";
import { IFilterForm } from "../../models/IFilterForm";

export interface CategoriesButtonsProps {
  filterCategories(key: string): void;

  setFilterForm(): React.Dispatch<React.SetStateAction<IFilterForm>>;
}

export interface ICategories {
  value: string[];
  label: string;
}

export const categories: ICategories[] = [
  {
    value: ["body"],
    label: "Уход за телом",
  },
  {
    value: ["hands"],
    label: "Уход за руками",
  },
  {
    value: ["legs"],
    label: "Уход за ногами",
  },
  {
    value: ["face"],
    label: "Уход за лицом",
  },
  {
    value: ["hair"],
    label: "Уход за волосами",
  },
  {
    value: ["tanning"],
    label: "Средства для загара",
  },
  {
    value: ["shaving"],
    label: "Средства для бритья",
  },
  {
    value: ["set"],
    label: "Подарочные наборы",
  },
  {
    value: ["hygiene"],
    label: "Гигиеническая продукция",
  },
  {
    value: ["mouth"],
    label: "Гигиена полости рта",
  },
  {
    value: ["paper"],
    label: "Бумажная продукция",
  },
];
// export const categories: ICategories[] = [
//   {
//     value: typeOfCare.body,
//     label: "Уход за телом",
//   },
//   {
//     value: typeOfCare.hands,
//     label: "Уход за руками",
//   },
//   {
//     value: typeOfCare.legs,
//     label: "Уход за ногами",
//   },
//   {
//     value: typeOfCare.face,
//     label: "Уход за лицом",
//   },
//   {
//     value: typeOfCare.hair,
//     label: "Уход за волосами",
//   },
//   {
//     value: typeOfCare.tanning,
//     label: "Средства для загара",
//   },
//   {
//     value: typeOfCare.shaving,
//     label: "Средства для бритья",
//   },
//   {
//     value: typeOfCare.set,
//     label: "Подарочные наборы",
//   },
//   {
//     value: typeOfCare.hygiene,
//     label: "Гигиеническая продукция",
//   },
//   {
//     value: typeOfCare.mouth,
//     label: "Гигиена полости рта",
//   },
//   {
//     value: typeOfCare.paper,
//     label: "Бумажная продукция",
//   },
// ];
