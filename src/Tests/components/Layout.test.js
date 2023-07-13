import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

describe('Test the Layout component', () => {
  test('Check if the Layout component render correctly', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Check that all the correct elements are in the component', () => {
    const component = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );

    const title = component.container.querySelector('h1');

    expect(title).toHaveTextContent('Math Magicians');
  });
});
