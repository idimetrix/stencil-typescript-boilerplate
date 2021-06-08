import { newSpecPage } from '@stencil/core/testing';

import { MyComponent } from '../my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          Hello, World! I'm <span></span>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component prop1="" prop2="" prop3=""></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component prop1="" prop2="" prop3="">
        <mock:shadow-root>
          Hello, World! I'm <span></span>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
