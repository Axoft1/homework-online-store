import {render, screen} from '@testing-library/react'
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


test( "render", ()=>{
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const element = screen.getAllByRole('button')[0];
    expect(element).toBeInTheDocument()
})