import {fireEvent, render, screen} from '@testing-library/react'
import {IDataForm, convertIntoObj} from "./index"
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import Header from '../header/Header';
import userEvent from '@testing-library/user-event';
import { ICatalog } from '../../models/ICatalog';


// test("submit-admin-panel", async () => {
//   render(
//     <MemoryRouter>
//       <Header />
//     </MemoryRouter>
//   );
//   const user = userEvent
//   const element = screen.getByTestId("submit-admin-panel");
//    user.click(element);
//   const  addedProduct = 
//   screen.getByTestId("added-product");
//   expect(addedProduct).toBeInTheDocument();
// });

test("Convert into object", () => {
  const catalog: ICatalog = {
    id: 1,
    count: 1,
    barcode: "1",
    brand: "brand",
    description: "description",
    manufacturer: "manufacturer",
    name: "name",
    price: 123,
    size: "Type",
    size_type: "size_type",
    type_of_care: ["type_of_care"],
    url: "url",
  };
  const obj: IDataForm = {
    id: 1,
    barcode: "1",
    brand: "brand",
    description: "description",
    manufacturer: "manufacturer",
    name: "name",
    price: "123",
    size: "Type",
    size_type: "size_type",
    type_of_care: ["type_of_care"],
    url: "url",
  };
  
  expect(convertIntoObj(obj)).toEqual(catalog);
});
test("Convert into object is incorrect", () => {
  const catalog: ICatalog = {
    id: 1,
    count: 1,
    barcode: "1",
    brand: "brand",
    description: "description",
    manufacturer: "manufacturer",
    name: "name",
    price: 123,
    size: "Type",
    size_type: "size_type",
    type_of_care: ["type_of_care"],
    url: "url",
  };
  const obj: IDataForm = {
    id: 0,
    barcode: "1",
    brand: "brand",
    description: "description",
    manufacturer: "manufacturer",
    name: "name",
    price: "123",
    size: "Type",
    size_type: "size_type",
    type_of_care: ["type_of_care"],
    url: "url",
  };

  expect(convertIntoObj(obj)).not.toEqual(catalog);
});