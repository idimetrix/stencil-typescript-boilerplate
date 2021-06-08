import { newE2EPage } from '@stencil/core/testing';

describe('my-test2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-test2></my-test2>');

    const element = await page.find('my-test2');
    expect(element).toHaveClass('hydrated');
  });
});
