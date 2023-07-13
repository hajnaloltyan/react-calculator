import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

describe('Test the Navbar component', () => {
  test('Check if the component render correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('Check how many links are and they content', () => {
    const Navbarcomponent = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const links = Navbarcomponent.container.querySelectorAll('a');

    expect(links.length).toBe(3);
    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveTextContent('Calculator');
    expect(links[2]).toHaveTextContent('Quotes');
  });
});
