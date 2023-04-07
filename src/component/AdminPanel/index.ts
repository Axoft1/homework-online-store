import { ICatalog } from "../../models/ICatalog";

export function convertIntoObj(obj: IDataForm): ICatalog {
  const res: ICatalog = {
    id: 0,
    count: 0,
    barcode: "",
    brand: "",
    description: "",
    manufacturer: "",
    name: "",
    price: 0,
    size: "",
    size_type: "",
    type_of_care: [],
    url: "",
  };
  for (const key in obj) {
    if (key === "price") {
      res[key] = Number(obj[key]);
    } else if (key === "barcode") {
      res[key] = obj[key];
    } else if (key === "brand") {
      res[key] = obj[key];
    } else if (key === "description") {
      res[key] = obj[key];
    } else if (key === "manufacturer") {
      res[key] = obj[key];
    } else if (key === "name") {
      res[key] = obj[key];
    } else if (key === "size") {
      res[key] = obj[key];
    } else if (key === "size_type") {
      res[key] = obj[key];
    } else if (key === "type_of_care") {
      res[key] = obj[key];
    } else if (key === "url") {
      res[key] = obj[key];
    } else if (key === "id") {
      res[key] = obj[key];
      res["count"] = 1;
    } else {
      res["count"] = 1;
      res["id"] = Math.floor(Math.random() * 1000);
    }
  }
  return res;
}

export interface IDataForm {
  id: number;
  barcode: string;
  brand: string;
  description: string;
  manufacturer: string;
  name: string;
  price: string;
  size: string;
  size_type: string;
  type_of_care: string[];
  url: string;
}
