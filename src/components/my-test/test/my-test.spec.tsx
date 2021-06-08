import { newSpecPage } from '@stencil/core/testing';
import { MyTest } from '../my-test';

describe('my-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTest],
      html: `<my-test></my-test>`,
    });
    expect(page.root).toEqualHtml(`
      <my-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-test>
    `);
  });
});
