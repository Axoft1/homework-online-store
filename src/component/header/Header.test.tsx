import {render, screen} from '@testing-library/react'
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


test( "render", (): void=>{
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const element = screen.getAllByRole('button')[0];
    expect(element).toBeInTheDocument()
})
test( "Not text", (): void=>{
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
   
    expect(screen.getAllByRole("button", {name: /каталог/i} )[0]).toBeInTheDocument();
})
