export enum typeOfCare {
  body="body", 
  hands="hands",
  legs="legs",
  face="face",
  paper="paper",
  hygiene="hygiene",
  tanning="tanning",
  set="set",
  hair="hair",
  mouth="mouth",
  shaving="shaving",
}
export type CareCategories =
  | "body"
  | "hands"
  | "legs"
  | "face"
  | "paper"
  | "hygiene"
  | "tanning"
  | "set"
  |"hair"
  |"mouth"
  |"shaving";

export interface ICatalog {
  id: number;
  name: string;
  url: string;
  size_type: string;
  size: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  count?: number;
  type_of_care: CareCategories;
}
