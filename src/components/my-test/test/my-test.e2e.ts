import { newE2EPage } from '@stencil/core/testing';

describe('my-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-test></my-test>');

    const element = await page.find('my-test');
    expect(element).toHaveClass('hydrated');
  });
});
