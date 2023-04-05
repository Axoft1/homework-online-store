import {fireEvent, render, screen} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import Header from '../header/Header';
import userEvent from '@testing-library/user-event';
import Catalog from '../../pages/catalog/Catalog';


test("submit-admin-panel", async () => {
  render(
    <MemoryRouter>
      <Catalog />
    </MemoryRouter>
  );
  const user = userEvent
const input = await screen.findAllByTestId("Check")[0];
   user.click(input);

  expect(screen.getByLabelText("Check")).toBeChecked();
});