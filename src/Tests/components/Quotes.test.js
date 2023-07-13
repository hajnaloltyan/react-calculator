import { render } from '@testing-library/react';
import Quotes from '../../components/Quotes/Quotes';

describe('Test the Quotes component', () => {
  test('Check if the component render correctly', () => {
    const tree = render(<Quotes />);
    expect(tree).toMatchSnapshot();
  });

  test('Check if the correct title are showed', () => {
    const tree = render(<Quotes />);
    const tittle = tree.container.querySelector('.pagetitle');
    expect(tittle).toHaveTextContent("Today's Quotes:");
  });
});
