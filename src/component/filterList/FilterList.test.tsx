import {fireEvent, render, screen} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import Header from '../header/Header';
import userEvent from '@testing-library/user-event';
import Catalog from '../../pages/catalog/Catalog';
import FilterList from './FilterList';


test("filter list", async () => {
  render(
    <MemoryRouter>
      <FilterList  brand={["ARAVIA"]} />
    </MemoryRouter>
  );
  const user = userEvent
  const input = screen.getByText('ARAVIA');
   user.click(input);
  // expect(Promise.resolve(input)).toBeInTheDocument();
  expect(screen.getByLabelText("ARAVIA")).toBeChecked();
  //  expect(screen.getByTestId("check")).toBeInTheDocument();
});