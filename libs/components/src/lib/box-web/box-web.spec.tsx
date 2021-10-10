import { render } from '@testing-library/react';
import { BoxWeb } from './box-web';

describe('BoxWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoxWeb>Click</BoxWeb>);

    expect(baseElement).toBeTruthy();
  });
});
