import {fireEvent, render, screen} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import Header from '../header/Header';
import userEvent from '@testing-library/user-event';


test("submit-admin-panel", async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  // const user = userEvent
  // const element = screen.getByTestId("submit-admin-panel");
  //  user.click(element);
  // const  addedProduct = 
  // screen.getAllByTestId("added-product");
  // expect(addedProduct).toBeInTheDocument();
});