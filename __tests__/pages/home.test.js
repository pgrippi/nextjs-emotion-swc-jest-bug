import { render, screen } from '@testing-library/react'
import Home from '../../pages/index';

describe('<Home />', () => {
  it('renders a nested emotion component without erroring', () => {
    const {container} = render(<Home />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
