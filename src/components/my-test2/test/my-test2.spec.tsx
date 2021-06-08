import { newSpecPage } from '@stencil/core/testing';
import { MyTest2 } from '../my-test2';

describe('my-test2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTest2],
      html: `<my-test2></my-test2>`,
    });
    expect(page.root).toEqualHtml(`
      <my-test2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-test2>
    `);
  });
});
