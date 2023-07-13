import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../../components/Home/Home';

describe('Test the Home component', () => {
  test('Check if the Home component render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Check that the home has te correct title', () => {
    const homeComponent = render(<Home />);
    expect(homeComponent.container).toHaveTextContent('Welcome to Our Page!');
  });

  test('Check that the home has te correct last paragraph', () => {
    const homeComponent = render(<Home />);
    expect(homeComponent.container).toHaveTextContent('Join us on this exciting adventure, where every problem has a solution, and every solution holds a world of possibilities. Welcome to Math Magicians - where math comes to life!');
  });
});
